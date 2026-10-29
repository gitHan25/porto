import { siGithub } from "simple-icons";

/**
 * Contact-link label (as written in /content/profile.ts) to a 24x24 filled mark.
 * LinkedIn is no longer in simple-icons, so its "in" tile is drawn here (even-odd, so the letters are cut out).
 */
export const SOCIAL_ICONS: Record<string, { path: string; title: string; viewBox?: string }> = {
  github: { path: siGithub.path, title: "GitHub" },
  linkedin: {
    title: "LinkedIn",
    // The tile spans 3-21 of the 24 grid; crop in so it matches GitHub's optical size.
    viewBox: "1.5 1.5 21 21",
    path: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM7.6 6.4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM6.5 10h2.2v7.5H6.5zM10.5 10h2.1v1c.4-.7 1.2-1.2 2.4-1.2 2.1 0 3 1.3 3 3.5v4.2h-2.2v-3.8c0-1.1-.4-1.8-1.4-1.8-1.1 0-1.7.8-1.7 1.9v3.7h-2.2z",
  },
};
