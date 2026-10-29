export interface Education {
  slug: string;
  school: string;
  degree: string;
  period: string;
  location: string;
  gpa: string;
  thesis: string;
  supervisors: string;
  coursework: string[];
}

export const education: Education[] = [
  {
    slug: "telkom-university",
    school: "Telkom University",
    degree: "B.Sc. Informatics",
    period: "Sep 2022 – Jun 2026",
    location: "Bandung",
    gpa: "3.82 / 4.00",
    thesis: "Feature Extraction Analysis for Indonesian Cross-Domain Sentiment Analysis",
    supervisors: "Donni Richasdy, S.T., M.T. and Prati Hutari Gani, S.T., M.T.",
    coursework: ["Natural Language Processing", "Machine Learning", "Data Mining"],
  },
];
