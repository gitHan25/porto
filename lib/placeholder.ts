/** True for any value still holding a literal [PLACEHOLDER ...] marker. */
export const isPlaceholder = (value: string): boolean =>
  value.includes("[PLACEHOLDER");

/** Prefix a /public path with the GitHub Pages base path (empty elsewhere). */
export const asset = (path: string): string =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
