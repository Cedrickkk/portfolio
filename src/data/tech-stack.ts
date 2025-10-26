interface TechnologyStack {
  type: string;
  technologies: string[];
}

export const technologyStack: TechnologyStack[] = [
  {
    type: "Frontend",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "React",
      "TailwindCSS",
      "PHP",
    ],
  },
  {
    type: "Backend",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Express.js",
      "Node.js",
      "Laravel",
    ],
  },
  {
    type: "Tools",
    technologies: ["Git", "Github", "Figma"],
  },
];
