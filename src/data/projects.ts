import { ProjectCardProps } from "@/components/ProjectCard";
import { ProjectShowcaseListProps } from "@/components/ProjectShowcaseList";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListProps[] = [
  {
    index: 0,
    title: "Online Media Player",
    href: "/projects",
    tags: ["Html", "CSS", "JavaScript"],
    image: {
      LIGHT: "/images/projects/Music-Player-Main.png",
      DARK: "/images/projects/Music-Player-Home.png",
    },
  },
  {
    index: 1,
    title: "Image Classification Project",
    href: "/projects",
    tags: [
      "Machine Learning",
      "OpenCV",
      "GridSearchCV",
      "Flask",
      "Html",
      "CSS",
      "JavaScipt",
     
    ],
    image: {
      LIGHT: "/images/projects/Image_Classifier.png",
      DARK: "/images/projects/Image_Classifier.png",
    },
  },
  {
    index: 2,
    title: "World Time App",
    href: "/projects",
    tags: ["Flutter", "Dart"],
    image: {
      LIGHT: "/images/projects/Desktop 1.png",
      DARK: "/images/projects/Desktop 1.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [

  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolio-MainPage.png",
      "/images/projects/portfolio-Skills.png",
      "/images/projects/portfolio-about.png",
    ],
    description:
      "My personal portfolio project.",
    sourceCodeHref: "https://github.com/Nilesh-Tale/Nilesh-Portfolio",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Online Media Player",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/Music-Player-Main.png",
      "/images/projects/Music-Player-Home.png",
    ],
    description:
      "Online Media Player for entertainment.",
    sourceCodeHref: "https://github.com/Nilesh-Tale/Web_Online_Media_Player",
    liveWebsiteHref: "https://nilesh-tale.github.io/Web_Online_Media_Player/",
  },
  
  {
    name: "Android Web Browser",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/Browser-MainPage.png",
      "/images/projects/Browser-FAB.png",
      "/images/projects/Browser-Bookmarks.png",
      "/images/projects/Browser-AppIntegrations.png",
      "/images/projects/Browser-Incognito.png",
      "/images/projects/Browser-SignUp.png",
      "/images/projects/Browser-Login.png",
      "/images/projects/Browser-Settings.png",
    ],
    description:
      "Android Web Browser App to surf on the internet.",
    sourceCodeHref: "https://github.com/Nilesh-Tale/UM-Browser/tree/main",
  },

  {
    name: "Document Plagiarism Checker",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/DPC-DashBoard.png",
      "/images/projects/DPC-PlagReport.png",
      "/images/projects/DPC-Login.png",
      "/images/projects/DPC-SignUp.png",
    ],
    description:
      "Compare two text documents and displays their plagiarism percentage by processing it with BERT algorithm .",
    sourceCodeHref: "https://github.com/Nilesh-Tale/Document-Plagiarism-Checker",
    
  },
  
 
  {
    name: "Celebrity Image Classifier",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/Image_Classifier.png",
    ],
    description:
      "Image Classifier Project that distinguishes an image from given set of celebrity images.",
    sourceCodeHref: "https://github.com/Nilesh-Tale/Image_Classification_Project",

  },
  {
    name: "World Time App",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/Desktop 1.png",
      "/images/projects/Desktop 2.png",

    ],
    description:
      "Flutter based World Time app to display time.",
    sourceCodeHref: "https://github.com/Nilesh-Tale/world_time/tree/main",
  },
];
