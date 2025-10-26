interface EducationItem {
  imageSource: string;
  name: string;
  years: string;
  course: string;
}

export const education: EducationItem[] = [
  {
    name: "Pamantasan ng Lungsod ng Pasig",
    imageSource: "plp.png",
    years: "2023 - 2026",
    course: "Bachelor of Science in Information Technology",
  },
  {
    name: "Jose Rizal University",
    imageSource: "jru.png",
    years: "2022 - 2023",
    course: "Bachelor of Science in Information Technology",
  },
];
