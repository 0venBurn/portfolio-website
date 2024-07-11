import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import dub_bikesImg from "@/public/dub_bikes.png";
import captain_carbonImg from "@/public/captain_carbon.png";
import anseoImg from "@/public/anseo.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from NCI, BA  Psychology",
    location: "Dublin, IE",
    description:
      "After 3 years of study in Dublin, I graduated with a bachelor's degree in Psychology. With a 1st Overall grade",
    icon: React.createElement(LuGraduationCap),
    date: "2020-2023",
  },
  {
    title: "MSc in Computer Science.",
    location: "Dublin, IE",
    description:
      "Currently completing a Master's degree in Computer Science at University College Dublin. Expected graduation in December 2024.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Dublin Bikes",
    description:
      "Project developed in a team of 3 to help users find, plan and predict trips using machine learning models on scraped data",
    tags: ["Python", "Flask", "MySQL", "JavaScript", "TensorFlow", "AWS"],
    imageUrl: dub_bikesImg,
  },
  {
    title: "Captain Carbon",
    description:
      "A 2D platformer game developed in Java using the LibGDX library. Developed to help educate kids on Carbon emissions and benefits of public transport. Game was published in the IEEE ITSC 2024 conference ",
    tags: ["Java", "LibGDX"],
    imageUrl: captain_carbonImg,
  },
  {
    title: "Anseo",
    description:
      "Analytics tool developed to help entreprenuers and business owners where best to move in New York",
    tags: [
      "React",
      "Vite",
      "PostgreSQL",
      "Tailwind",
      "Framer",
      "Python",
      "FastAPI",
      "Java",
      "TypeScript",
      "Spring Boot",
    ],
    imageUrl: anseoImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Go",
  "Flask",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Java",
  "Spring",
  "FastAPI",
] as const;
