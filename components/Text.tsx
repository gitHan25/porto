import { isPlaceholder } from "@/lib/placeholder";

const MARKER = /(\[PLACEHOLDER[^\]]*\])/g;

/** Renders a string; any [PLACEHOLDER ...] marker is flagged so it is easy to spot and replace. */
export function Text({ children }: { children: string }) {
  return (
    <>
      {children.split(MARKER).map((part, i) =>
        part.startsWith("[PLACEHOLDER") ? (
          <mark key={i} className="ph" title="Placeholder - replace this in /content">
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}

/** External link; falls back to visible plain text while the href is still a placeholder. */
export function ExtLink({ href, children }: { href: string; children: string }) {
  if (isPlaceholder(href)) {
    return (
      <span className="text-subtle">
        {children}: <Text>{href}</Text>
      </span>
    );
  }
  const external = !href.startsWith("mailto:");
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
      {external && <span aria-hidden="true"> ↗</span>}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
