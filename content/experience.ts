export interface Experience {
  slug: string;
  role: string;
  org: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  /** Tools named in the summary, shown as logo tiles. */
  tech: string[];
}

export const experience: Experience[] = [
  {
    slug: "lab-assistant-telkom",
    role: "Practicum Laboratory Assistant",
    org: "Telkom University (Informatics Lab)",
    period: "Jun 2024 – Jun 2026",
    location: "Bandung",
    type: "Part-time",
    tech: ["Go", "C++", "Java"],
    summary:
      "Lab assistant at the Informatics Lab across five semesters of my degree (semesters 4–8). I helped classes of 38–40 students through weekly practicum sessions in Go (Intro to Programming & Algorithms), C++ (Data Structures), and Java (Object-Oriented Programming), walking through the material, helping people who got stuck, and grading their work each week.",
  },
  {
    slug: "uiux-intern-psdmbp",
    role: "UI/UX Design Intern",
    org: "Pusat Sumber Daya Mineral, Batubara dan Panas Bumi (PSDMBP)",
    period: "Jun 2025 – Aug 2025",
    location: "Bandung",
    type: "Internship (Kerja Praktik)",
    tech: ["Figma"],
    summary:
      "I redesigned GeoRIMA, a public site run by the Geological Agency (Ministry of Energy and Mineral Resources) that presents Indonesia’s natural-resource data from national down to regency level. I audited the old interface, reorganized the navigation across pages templates, and built Figma prototypes that shortened the path from the landing page to the actual commodity data for two quite different audiences, the general public and geology professionals. I handed the prototypes to the dev team through weekly reviews.",
  },
];
