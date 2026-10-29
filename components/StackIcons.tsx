import { iconFor, baseName } from "@/lib/stack-icons";
import { isPlaceholder } from "@/lib/placeholder";
import { Text } from "./Text";

/**
 * Technology logos as quiet tiles. The name shows on hover, keyboard focus and
 * tap (a focusable tile gains focus on tap). Names with no logo fall back to a text chip.
 */
export default function StackIcons({ items, label = "Stack" }: { items: string[]; label?: string }) {
  return (
    <ul className="flex flex-wrap items-center gap-3" aria-label={label}>
      {items.map((name, i) => {
        const icon = iconFor(name);
        if (!icon) {
          return (
            <li key={name} className="chip">
              <Text>{name}</Text>
            </li>
          );
        }
        return (
          <li
            key={name}
            className={`stack-tile${isPlaceholder(name) ? " stack-tile-ph" : ""}`}
            style={{ "--i": i } as React.CSSProperties}
            tabIndex={0}
            aria-label={name}
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
              <path d={icon.path} />
            </svg>
            <span className="stack-name" aria-hidden="true">
              {baseName(name)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Logos only, for rows that are already a link (so the marks are not tab stops). The name shows on
 * pointer hover; a screen-reader line carries the full list for everyone else. Names with no logo
 * stay as small text, since there is nothing else to show.
 */
export function StackMarks({ items }: { items: string[] }) {
  return (
    <>
      <ul className="pj-stack" aria-hidden="true">
        {items.map((name) => {
          const icon = iconFor(name);
          return (
            <li key={name} className="pj-mark">
              {icon ? (
                <>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d={icon.path} />
                  </svg>
                  <span className="pj-tip">{baseName(name)}</span>
                </>
              ) : (
                <span className="pj-mark-text">{baseName(name)}</span>
              )}
            </li>
          );
        })}
      </ul>
      <span className="sr-only">Stack: {items.map(baseName).join(", ")}</span>
    </>
  );
}
