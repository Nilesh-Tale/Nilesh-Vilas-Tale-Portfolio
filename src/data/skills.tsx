import Image from "next/image";
import {
  SiExpress,
  SiSocketdotio,
  SiPrisma,
  SiNextdotjs,
  SiFlask,
} from "react-icons/si";
import {
  FramerMotionIcon,
  GithubIcon,
  ReactRouterDomIcon,
  VitePwaIcon,
} from "@/components/Icons";
import { SkillPillProps } from "@/components/Skills";

export const LANGUAGES: SkillPillProps[] = [
 
  {
    name: "Java",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="java logo" src="/icons/java-icon.svg" fill />
      </span>
    ),
  },

  {
    name: "Python",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="python logo" src="/icons/python.svg" fill />
      </span>
    ),
  },

  {
    name: "C++",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="c++ logo" src="/icons/c++.svg" fill />
      </span>
    ),
  },
  {
    name: "Dart",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="Dart logo" src="/icons/dartlang-icon.svg" fill />
      </span>
    ),
  },
  {
    name: "C",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="c logo" src="/icons/c-1.svg" fill />
      </span>
    ),
  },

  {
    name: "HTML",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="html logo" src="/icons/html.svg" fill />
      </span>
    ),
  },
 
  {
    name: "Javascript",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="javascript logo" src="/icons/javascript.svg" fill />
      </span>
    ),
  },
  
];

export const LIBRARY_FRAMEWORK: SkillPillProps[] = [
  
  {
    name: "Flutter",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="Flutter logo" src="/icons/flutterio-icon.svg" fill />
      </span>
    ),
  },

  {
    name: "BERT",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="BERT logo" src="/icons/BERT.svg" fill />
      </span>
    ),
  },
  {
    name: "OpenCV",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="OpenCV logo" src="/icons/opencv-icon.svg" fill />
      </span>
    ),
  },

  {
    name: "TensorFlow",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="TensorFlow logo" src="/icons/tensorflow-icon.svg" fill />
      </span>
    ),
  },


  {
    name: "Reactjs",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="reactjs logo" src="/icons/reactjs.svg" fill />
      </span>
    ),
  },
  {
    name: "Nextjs",
    icon: <SiNextdotjs className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  
];

export const BACKEND_PILL: SkillPillProps[] = [

  {
    name: "Flask",
    icon: <SiFlask className="h-5 w-5 sm:h-8 sm:w-8" />,
  },

  {
    name: "Nodejs",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="nodejs logo" src="/icons/nodejs.svg" fill />
      </span>
    ),
  },
  {
    name: "PHP",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="PHP logo" src="/icons/php-icon.svg" fill />
      </span>
    ),
  },
 
  
];

export const DATABASE_ORM_PILL: SkillPillProps[] = [
  {
    name: "MongoDB",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="mongodb logo" src="/icons/mongodb.svg" fill />
      </span>
    ),
  },
  {
    name: "Firebase",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="Firebase logo" src="/icons/firebase-icon.svg" fill />
      </span>
    ),
  },
  {
    name: "MySQL",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="MySQL logo" src="/icons/mysql-ar21.svg" fill />
      </span>
    ),
  },
 
];

export const TOOLS_TECHNOLOGIES: SkillPillProps[] = [
  {
    name: "Android Studio",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="Android Studio logo" src="/icons/android-studio-icon.svg" fill />
      </span>
    ),
  },

  {
    name: "Vscode",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="vscode logo" src="/icons/vscode.svg" fill />
      </span>
    ),
  },

  {
    name: "Git",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="git logo" src="/icons/git.svg" fill />
      </span>
    ),
  },
  {
    name: "Github",
    icon: <GithubIcon className="h-5 w-5 sm:h-8 sm:w-8" />,
  },
  
  {
    name: "Postman",
    icon: (
      <span className="relative h-5 w-5 sm:h-8 sm:w-8">
        <Image alt="postman logo" src="/icons/postman.svg" fill />
      </span>
    ),
  },
 
];
