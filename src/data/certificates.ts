interface CertificateItem {
  id: number;
  issuer: string;
  content: {
    id: number;
    name: string;
    imageSource: string;
  };
}

export const certificates: CertificateItem[] = [
  {
    id: 1,
    issuer: "@awseducate",
    content: {
      id: 1,
      name: "Getting Started with Cloud Operations",
      imageSource: "aws-educate-getting-started-with-cloud-ops-training.png",
    },
  },
  {
    id: 2,
    issuer: "@awseducate",
    content: {
      id: 2,
      name: "Getting Started with Compute",
      imageSource: "aws-educate-getting-started-with-compute-training-b.png",
    },
  },
  {
    id: 3,
    issuer: "@awseducate",
    content: {
      id: 3,
      name: "Getting Started with Databases",
      imageSource: "aws-educate-getting-started-with-databases-training.png",
    },
  },
  {
    id: 4,
    issuer: "@awseducate",
    content: {
      id: 4,
      name: "Getting Started with Storage Security",
      imageSource: "aws-educate-getting-started-with-security-training-.png",
    },
  },
  {
    id: 5,
    issuer: "@awseducate",
    content: {
      id: 5,
      name: "Getting Started with Storage",
      imageSource: "aws-educate-getting-started-with-storage-training-b.png",
    },
  },
  {
    id: 6,
    issuer: "@awseducate",
    content: {
      id: 6,
      name: "Getting Started with Serverless",
      imageSource: "aws-educate-getting-started-with-serverless-training.png",
    },
  },
  {
    id: 7,
    issuer: "@awseducate",
    content: {
      id: 7,
      name: "Introduction to Cloud 101",
      imageSource: "aws-educate-introduction-to-cloud-101-training-badge.png",
    },
  },
  {
    id: 8,
    issuer: "@joserizaluniversity",
    content: {
      id: 8,
      name: "Database Certification Exam Review",
      imageSource: "jru-database-certification-exam-review.jpg",
    },
  },
  {
    id: 9,
    issuer: "@joserizaluniversity",
    content: {
      id: 9,
      name: "DevOps The Bigger Picture",
      imageSource: "jru-devops-seminar-certificate.jpg",
    },
  },
  {
    id: 10,
    issuer: "@joserizaluniversity",
    content: {
      id: 10,
      name: "Interactive Java Tutorial",
      imageSource: "jru-interactive-java-tutorial.jpg",
    },
  },
];
