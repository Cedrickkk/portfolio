interface Project {
  id: number;
  name: string;
  link?: string;
  imageSource: string;
  description: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Qmsopticore",
    imageSource: "qmsopticore.png",
    description:
      "A Document Management System aimed to improved document efficiency designed for Pamantasan ng Lungsod ng Pasig with document and signature authentication using Convolutional Neural Network.",
    technologies: [
      "Typescript",
      "React",
      "Laravel",
      "MySQL",
      "Python",
      "Inertia.js",
    ],
  },
  {
    id: 2,
    name: "QuizCram",
    imageSource: "quiz-cram.png",
    description:
      "An educational application built that enables quiz creation, timed testing, and automated grading. Features include multi-attempt tracking, data visualization, and progress monitoring for optimal learning outcomes.",
    technologies: [
      "React",
      "TailwindCSS",
      "Laravel",
      "MySQL",
      "Shadcn",
      "Inertia.js",
    ],
  },
  {
    id: 3,
    name: "React Redux Bank",
    imageSource: "react-redux-bank.png",
    description:
      "A small application demonstrating Redux state management through a simplified banking interface. Users can create customer profiles, manage account balances with deposit, withdraw, and loan operations.",
    technologies: ["React", "Redux", "Typescript", "TailwindCSS", "Shadcn"],
  },
  {
    id: 4,
    name: "The Missing Professor",
    imageSource: "the-missing-professor.png",
    description:
      "An interactive CTF game that teaches cybersecurity featuring five progressive challenges covering cryptography, terminal navigation, and authentication systems. It aims to make cybersecurity education engaging for students.",
    technologies: ["React", "Typescript", "Shadcn", "Zod", "Zustand"],
  },
];
