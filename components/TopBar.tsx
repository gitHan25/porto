"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Profile } from "@/content/profile";

export interface NavLink {
  href: string;
  label: string;
}

export default function TopBar({ profile, links }: { profile: Profile; links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  // The mobile dropdown closes on Escape or a tap outside the bar.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => {
      if (!(e.target as Element).closest(".pill")) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  // Marks the nav link whose section crosses a thin band near the top of the screen.
  useEffect(() => {
    const ids = links.map((l) => l.href.split("#")[1]).filter(Boolean);
    const targets = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    if (!targets.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    targets.forEach((t) => io.observe(t));
    // The last section is short, so at the very bottom of the page it never reaches the band.
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        setActive(targets[targets.length - 1].id);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [links]);

  return (
    <header className="topbar">
      <div className="pill">
        <Link href="/" className="topbrand mono text-[0.9375rem] font-medium text-text hover:no-underline">
          <span className="prompt">{profile.handle}</span>
          <span className="text-muted">@portfolio</span>
          <span className="text-subtle">&nbsp;~</span>
        </Link>
        <nav id="site-nav" className="topnav" data-open={open} aria-label="Sections">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={active && l.href.endsWith(`#${active}`) ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
