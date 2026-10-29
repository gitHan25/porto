"use client";

import { useEffect, useRef } from "react";

// Survives client-side navigation but resets on a real page load, so the intro plays once per arrival.
let played = false;

interface Line {
  text: string;
  /** Typing speed in characters per second. */
  cps: number;
}

/** Pause between lines, and before the first one, in ms. */
const GAP_MS = 250;
const START_MS = 300;
/** Must outlast the longest .hero-in delay + duration in globals.css. */
const INTRO_END_MS = 5400;

/**
 * Types the name, role and headline one after another, once per page load. The inline script in
 * layout.tsx sets data-typing and data-intro on <html> unless the visitor prefers reduced motion.
 * data-typing hides the overlay until the first character; data-intro drives the staggered fade of
 * the rest of the hero in CSS. The full text is always in the page for readers and search engines.
 * A click, tap, scroll or key (not Tab) finishes everything at once.
 *
 * The typing writes to text nodes through refs, so React never re-renders per frame.
 */
export default function Typed({ name, role, lede }: { name: string; role: string; lede: string }) {
  const texts = useRef<(HTMLSpanElement | null)[]>([]);
  const carets = useRef<(HTMLSpanElement | null)[]>([]);

  const lines: Line[] = [
    { text: name, cps: 20 },
    { text: role, cps: 32 },
    { text: lede, cps: 40 },
  ];

  useEffect(() => {
    const html = document.documentElement;
    if (html.dataset.typing !== "1" || played) {
      html.removeAttribute("data-typing");
      html.removeAttribute("data-intro");
      return;
    }

    let line = 0;
    let lineStart = 0;
    let timer = 0;
    let gapTimer = 0;
    let endTimer = 0;

    const setCaret = (active: number) =>
      carets.current.forEach((c, i) => c && (c.hidden = i !== active));

    const finish = () => {
      window.clearInterval(timer);
      window.clearTimeout(gapTimer);
      window.clearTimeout(endTimer);
      lines.forEach((l, i) => {
        const el = texts.current[i];
        if (el) el.textContent = l.text;
      });
      setCaret(-1);
      html.removeAttribute("data-typing");
      html.removeAttribute("data-intro");
    };

    const tick = () => {
      const l = lines[line];
      const shown = Math.floor(((performance.now() - lineStart) / 1000) * l.cps);
      const el = texts.current[line];
      if (el) el.textContent = l.text.slice(0, shown);
      if (shown < l.text.length) return;
      window.clearInterval(timer);
      setCaret(-1);
      line += 1;
      if (line < lines.length) gapTimer = window.setTimeout(beginLine, GAP_MS);
    };

    // A short beat between lines, with the next caret already waiting.
    const beginLine = () => {
      setCaret(line);
      lineStart = performance.now();
      timer = window.setInterval(tick, 20);
    };

    const start = window.setTimeout(() => {
      played = true;
      texts.current.forEach((el) => el && (el.textContent = ""));
      html.removeAttribute("data-typing");
      beginLine();
      endTimer = window.setTimeout(finish, INTRO_END_MS);
    }, START_MS);

    const skip = (e: Event) => {
      if (e instanceof KeyboardEvent && (e.key === "Tab" || e.metaKey || e.ctrlKey || e.altKey)) return;
      finish();
    };
    const events = ["keydown", "pointerdown", "wheel", "touchstart"] as const;
    events.forEach((ev) => window.addEventListener(ev, skip, { once: true, passive: true }));
    return () => {
      window.clearTimeout(start);
      window.clearInterval(timer);
      window.clearTimeout(gapTimer);
      window.clearTimeout(endTimer);
      events.forEach((ev) => window.removeEventListener(ev, skip));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, role, lede]);

  /** One line: the sizer holds the real text and layout, the overlay is the typed view. */
  const overlay = (i: number) => (
    <span className="tw-overlay" aria-hidden="true">
      <span ref={(el) => void (texts.current[i] = el)}>{lines[i].text}</span>
      <span ref={(el) => void (carets.current[i] = el)} className="caret" hidden />
    </span>
  );

  return (
    <>
      <div className="hero-name">
        <h1 id="hero-title" className="tw">
          <span className="tw-sizer">{name}</span>
          {overlay(0)}
        </h1>
        <p className="tw mono hero-role">
          <span className="tw-sizer">{role}</span>
          {overlay(1)}
        </p>
      </div>
      <p className="tw hero-lead">
        <span className="tw-sizer">{lede}</span>
        {overlay(2)}
      </p>
    </>
  );
}
