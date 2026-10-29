export interface SkillGroup {
  group: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    group: "Languages",
    items: ["Go", "Java", "Python", "PHP", "SQL", "Dart", "C++"],
  },
  {
    group: "Backend",
    items: [
      "Spring Boot",
      "Laravel",
      "Go",
      "REST API design",
      "relational schema design",
    ],
  },
  { group: "Data/ML", items: ["pandas", "scikit-learn", "PyTorch", "NumPy"] },
  { group: "Tools", items: ["Git", "Postman", "Figma"] },
  {
    group: "Databases",
    items: ["MySQL", "PostgreSQL"],
  },
];
