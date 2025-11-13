interface Book {
  id: number;
  name: string;
  imageSource: string;
  author: string;
  description: string;
  link: string;
}

export const books: Book[] = [
  {
    id: 1,
    name: "Introduction to Java Programming and Data Structures 12th Edition",
    imageSource: "intro-to-java.jpg",
    author: "Daniel Liang",
    description:
      "This book took me from Java fundamentals to more advanced topics. It gave me a solid grasp of OOP principles and showed me how to work with Java's built-in classes and libraries. While going through the theories, I also solved exercises at the end of every chapter to practice what I learned.",
    link: "https://github.com/Cedrickkk/introduction-to-java-programming-and-data-structures-12e-exercises",
  },
  {
    id: 2,
    name: "Spring Start Here",
    imageSource: "spring-start-here.png",
    author: "Laurentiu Spilca",
    description:
      "After getting comfortable with Java, I wanted to learn Spring since it's widely used. This book walked me through the core concepts like dependency injection, auto-wiring, and starter dependencies. I built small Spring MVC and RESTful applications following along with the examples to see how everything works in practice.",
    link: "https://github.com/Cedrickkk/spring-start-here",
  },
  {
    id: 3,
    name: "Java Persistence with Spring Data and Hibernate",
    imageSource: "java-persistence.png",
    author: "Cătălin Tudose",
    description:
      "After learning Spring's core concepts and building small projects, I proceed on to data persistence with ORMs. I'm still working through this book to understand how to model domains effectively and persist data.",
    link: "https://github.com/Cedrickkk/java-persistence-with-spring-data-and-hibernate",
  },
  {
    id: 4,
    name: "Spring Security in Action",
    imageSource: "spring-security-in-action.png",
    author: "Laurentiu Spilca",
    description:
      "After on data persistence, security is next on my list. I want to learn how to properly secure Spring applications and implement authentication and authorization. I picked this book to help me understand how to protect user data and build secure applications.",
    link: "https://github.com/Cedrickkk/spring-security-in-action",
  },
  {
    id: 5,
    name: "Spring Boot Up and Running: Building Cloud Native Java and Kotlin Applications",
    imageSource: "spring-boot-up-and-running.jpg",
    author: "Mark Heckler",
    description:
      "Once I've covered the fundamentals of Spring, persistence, and security, I plan to dive deeper into Spring Boot. This book will show me how to tie everything together and build production-ready applications. I'm looking forward to learning cloud-native development practices and making the most of Spring Boot's features.",
    link: "https://github.com/Cedrickkk/java-persistence-with-spring-data-and-hibernate",
  },
];
