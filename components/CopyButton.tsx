"use client";

import { useEffect, useRef, useState } from "react";

/** Copies `text` and confirms in place for ~2s. Falls back to a plain label if the clipboard is unavailable. */
export default function CopyButton({
  text,
  label,
  announce,
}: {
  text: string;
  /** Button label at rest, e.g. "Copy address". */
  label: string;
  /** Screen-reader message after a successful copy. */
  announce: string;
}) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  // Only animate label swaps caused by a click, never the first paint.
  const [touched, setTouched] = useState(false);
  const timer = useRef(0);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    setTouched(true);
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
    } catch {
      setState("failed");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 2000);
  };

  return (
    <>
      <button type="button" className="btn copy-btn" onClick={copy}>
        {/* The sizer keeps the button at its resting width; the keyed label re-mounts so each swap fades in. */}
        <span className="copy-sizer" aria-hidden="true">{label}</span>
        <span key={state} className="copy-label" data-swap={touched ? "" : undefined}>
          {state === "copied" ? (
            <>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
              Copied
            </>
          ) : state === "failed" ? (
            "Copy failed"
          ) : (
            label
          )}
        </span>
      </button>
      <span className="sr-only" role="status">
        {state === "copied" ? announce : state === "failed" ? "Could not copy" : ""}
      </span>
    </>
  );
}
