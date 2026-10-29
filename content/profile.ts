export interface ContactLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  handle: string; // shown in the shell prompt, e.g. ~/farhan
  title: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  cv: string; // file in /public
  /** Headshot for the opening screen. null shows a placeholder frame. */
  portrait: { src: string; alt: string } | null;
  bio: string;
  status: string; // short status line shown at the top of the hero
  availability: string; // one sentence shown on the contact preview
  siteUrl: string; // used for Open Graph; update after you deploy
}

export const profile: Profile = {
  name: "Muhammad Farhan Editya",
  handle: "farhan",
  title: "Junior Backend Developer & Junior Data Analyst",
  tagline: "Informatics graduate, Telkom University",
  location: "Bandung, Indonesia",
  email: "farhaneditya03@gmail.com",
  github: "https://github.com/gitHan25",
  linkedin: "https://www.linkedin.com/in/muhammad-farhan-editya/",
  cv: "/cv.pdf",
  // Put your photo in /public/images and use: { src: "/images/portrait.jpg", alt: "Farhan Editya" }
  portrait: { src: "/images/profile.jpg", alt: "Farhan Editya" },
  bio: "Informatics graduate from Telkom University (GPA 3.82/4.00) working across backend engineering and applied NLP. I build and debug REST APIs in Go, Java (Spring Boot) and PHP (Laravel), and I published first-author research on Indonesian cross-domain sentiment analysis. I spent five semesters as a practicum lab assistant teaching programming to classes of ~40 students.",
  status: "Available for new opportunities",
  availability:
    "Open to backend developer and junior data-analyst roles. Email is the fastest way to reach me.",
  siteUrl: "https://handitya.tech",
};

export const contactLinks: ContactLink[] = [
  { label: "email", href: `mailto:${profile.email}` },
  { label: "github", href: profile.github },
  { label: "linkedin", href: profile.linkedin },
];
