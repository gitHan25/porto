"use client";

import { useEffect, useRef } from "react";

/** Commands already typed this page load, so scrolling back up or client-side navigation never replays one. */
const typed = new Set<string>();
const CPS = 45;

/**
 * A decorative shell prompt above a section heading ("$ cd projects"). The full text is always in the
 * markup; when the visitor allows motion and the line starts below the fold, it is blanked and typed
 * once as it scrolls into view (~300ms). The real heading is never delayed. Writes through refs, so
 * React never re-renders per frame.
 */
export default function Prompt({ command }: { command: string }) {
  const root = useRef<HTMLParagraphElement>(null);
  const text = useRef<HTMLSpanElement>(null);
  const caret = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = root.current;
    const t = text.current;
    const c = caret.current;
    if (!el || !t || !c) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (typed.has(command) || reduced || !("IntersectionObserver" in window) || el.getBoundingClientRect().top < window.innerHeight) {
      typed.add(command);
      return;
    }

    t.textContent = "";
    let timer = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        typed.add(command);
        c.hidden = false;
        const start = performance.now();
        timer = window.setInterval(() => {
          const shown = Math.floor(((performance.now() - start) / 1000) * CPS);
          t.textContent = command.slice(0, shown);
          if (shown < command.length) return;
          window.clearInterval(timer);
          c.hidden = true;
        }, 20);
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      window.clearInterval(timer);
      t.textContent = command;
      c.hidden = true;
    };
  }, [command]);

  return (
    <p ref={root} className="cmd mono" aria-hidden="true">
      <span className="cmd-sizer">
        <span className="prompt">$</span> {command}
      </span>
      <span className="cmd-live">
        <span className="prompt">$</span> <span ref={text}>{command}</span>
        <span ref={caret} className="caret" hidden />
      </span>
    </p>
  );
}
