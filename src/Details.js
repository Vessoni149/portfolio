// Enter all your detials in this file
// Logo images
import logogradient from "./assets/canoe-logo.png";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/yo.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import java from "./assets/techstack/java.png";
import springboot from "./assets/techstack/springboot.png"
import spring from "./assets/techstack/spring.jpg";
import springsec from "./assets/techstack/springsecurity.png";
import springcloud from "./assets/techstack//spring-cloud.png";
import intellij from "./assets/techstack/intellij.png";
import apache from "./assets/techstack/apache.png";
import mysql from "./assets/techstack/mysql.png";
import jwt from "./assets/techstack/jwt.png";
import dbeaver from "./assets/techstack/DBeaver.webp";
import workbench from "./assets/techstack/mysql-workbench.webp";
import docker from "./assets/techstack/docker.png";
import firebase from "./assets/techstack/firebase.png";
import clever from "./assets/techstack/clevercloud.png";
import maven from "./assets/techstack/maven.webp";
// Porject Images
import projectImage1 from "./assets/projects/ToDoList.jpg";
import projectImage2 from "./assets/projects/Calculator.jpg";
import projectImage3 from "./assets/projects/responsive.jpg";
import projectImage4 from "./assets/projects/apiRyMjpg.jpg";
import projectImage5 from "./assets/projects/gestion-gastos.jpg";
import projectImage6 from "./assets/projects/movies.jpg";
import projectImage7 from "./assets/projects/springCloud.jpg";
import projectImage8 from './assets/projects/marketplace.jpg';
import projectImage9 from './assets/projects/delimovil.jpg';
import projectImage10 from './assets/projects/kosten.jpg';
// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Personal Details
export const personalDetails = {
  name: "Agustin Vessoni",
  tagline: "I am a full stack developer.",
  img: profile,
  about: `Argentinian living in Guadalajara, Jal. México.
  I am an active, dynamic, responsible person with
  ease for personal relationships. I can carry out any
  work or function both in teams and individually. I
  consider myself self-taught and I like to be
  constantly learning.
  `,
};

//  Social Media URLs
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/agustin-vessoni-374128234/",
  github: "https://github.com/Vessoni149",
  instagram: "https://www.instagram.com/agustinvessoni/",
};

// Work Experience
export const workDetails = [
  {
    Position: "Full-stack Developer",
    Company: `Kosten`,
    Location: "Argentina",
    Type: "Part Time",
    Duration: "Nov 2024 - Jan 2025",
    Description:"Starting from an MVP developed in a No-Country work simulation, I worked with a group of developers, a designer and a QA tester to deliver a software product to a real client. I worked mainly on the back-end but also helped on the front-end. The Application deployed link and its code can be seen in the 'Projects' section"
  },
  {
    Position: "Back-end Developer",
    Company: `No-Country`,
    Location: "Argentina",
    Type: "Part Time",
    Duration: "Sep 2024 - Nov 2024",
    Description:"I participated in a work simulation in which I worked with a multidisciplinary group made up of back-end and front-end developers, UX-UI designers, QA, and a product manager, to create two MVPs that consisted of a food delivery web app and an adventure tourism services booking app. The project code can be seen in the 'Projects' section."
  },
  {
    Position: "Front-end Web Developer",
    Company: `Ministery of Conectivity and Modernization`,
    Location: "Santa Rosa, La Pampa, Argentina",
    Type: "Full Time",
    Duration: "Dec 2021 - Nov 2022",
    Description:"I developed new websites for all branches of the Executive Power, using html, css, bootstrap and vanilla javascript."
  },
  {
    Position: "Legal advisor",
    Company: `Asesoría Letrada de Gobierno`,
    Location: "Santa Rosa, La Pampa, Argentina",
    Type: "Full Time",
    Duration: "Sep 2019 - Dec 2021",
    Description:"I worked issuing legal opinions on draft laws and decrees and classification of legal information"
  },
];

// Education Details
export const eduDetails = [
  {
    Position: "Programming",
    Company: "Autodidact",
    Location: "Argentina, México",
    Type: "On line",
    Duration: "Feb 2021 - Dec 2024",
    Description: "Both during and after my university career I have studied self-taught technologies of interest to me, mostly I have taken free courses on YouTube but I have also used platforms such as Platzi, FreeCodeCamp and TodoCode Academy. I have taken courses in html, css, javascript, react, java, spring boot, spring security, spring cloud (microservices), MySql, design patterns, Solidity, among others."
  },
  {
    Position: "Programmer analyst",
    Company: "National University of La Pampa",
    Location: "General Pico, La Pampa, Argentina",
    Type: "Hybrid course",
    Duration: "Mar 2020 - Dec 2022",
    Description: "Degree with a duration of 3 years. During my years there I learned the fundamental bases of development. How a software system works, programming logic, networks, databases, both procedural and object-oriented programming, web programming, data structures and algorithms among other things."
  },
  {
    Position: "Programming",
    Company: `Platzi`,
    Location: "Santa Rosa, La Pampa, Argentina",
    Type: "On line",
    Duration: "Sep 2021 - Aug 2022",
    Description:"I won a scholarship from the Platzi platform by participating in a call to develop an application using Solidity. With it I was able to access all its courses for 11 months. In them I took the opportunity to carry out some of my interest and whose certificates can be seen in the respective section of this page."
  },
  {
    Position: "Law",
    Company: `National University of La Pampa`,
    Location: "Santa Rosa, La Pampa, Argentina",
    Type: "In person",
    Duration: "Mar 2013 - Dec 2019",
    Description:"Law was my first professional career. In 2018 I received a scholarship to do an exchange and study a semester in Bogotá, Colombia. I finished the degree in 2019."
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  java:java,
  spring:spring,
  springboot:springboot,
  springsec:springsec,
  springcloud:springcloud,
  intellij:intellij,
  apache:apache,
  mysql:mysql,
  jwt:jwt,
  dbeaver:dbeaver,
  workbench:workbench,
  docker:docker,
  firebase:firebase,
  clever:clever,
  maven:maven
};

// Project Details
export const projectDetails = [
  {
    title: "Kosten, viento de aventura.",
    image: projectImage10,
    description: `Trekking activity reservation application created for a real client in collaboration with a multidisciplinary team.`,
    techstack: "Java, Spring Boot, Spring Data JPA, Spring Secutiry, MySql, React, Material UI",
    previewLink: null,
    githubLink: "https://github.com/RamonCruz187/Kosten",
    videoDemoLink: null
  },
  {
    title: "Delimovil.",
    image: projectImage9,
    description: `Delivery app created during the work simulation organized by No-Country.`,
    techstack: "Java, Spring Boot, Spring Data JPA, Spring Secutiry, MySql, React",
    previewLink: null,
    githubLink: "https://github.com/No-Country-simulation/c20-23-m-java-react.DeliMovil",
    videoDemoLink: null
  },
  {
    title: "Market place.",
    image: projectImage8,
    description: `E-commerse full-stack Application.`,
    techstack: "Java, Spring Boot, Spring Data JPA, Spring Cloud, Spring Secutiry, MySql, React, Css",
    previewLink: null,
    githubLink: "https://github.com/Vessoni149/Marketplace-full",
    videoDemoLink: "https://youtu.be/L5aPFuQpTIM"
  },
  {
    title: "Integrative work, microservices course.",
    image: projectImage7,
    description: `E-commerse backend Application.`,
    techstack: "Java, Spring Boot, Spring Data JPA, Spring Cloud, MySql.",
    previewLink: null,
    githubLink: "https://github.com/Vessoni149/integrador-microservicios",
    videoDemoLink: null
  },
  {
    title: "Movies website.",
    image: projectImage6,
    description: `Movie website home page consuming an API`,
    techstack: "React.js, Bootstrap",
    previewLink: "https://peliculas-iaxcf18e8-vessoni149s-projects.vercel.app/",
    githubLink: "https://github.com/Vessoni149/React-peliculas",
    videoDemoLink: null
  },
  {
    title: "Personal expense management system.",
    image: projectImage5,
    description: `System to manage and divide expenses.`,
    techstack: "React.js, Java, Springboot, Spring Data JPA, MySql",
    previewLink: "https://gestion-gastos-front.vercel.app/",
    githubLink: "https://github.com/Vessoni149/gestionGastos-back",
    videoDemoLink: null
  },
  {
    title: "Rick & Morthy API consumption.",
    image: projectImage4,
    description: `Exercise of consuming an api with react.`,
    techstack: "React.js",
    previewLink: "https://vessoni149.github.io/ConsumoApiRickAndMorty/",
    githubLink: "https://github.com/Vessoni149/ConsumoApiRickAndMorty",
    videoDemoLink: null
  },
  {
    title: "Landing page responsive",
    image: projectImage3,
    description: `Project made in a Responsive Design course in Platzi.`,
    techstack: "HTML/CSS",
    previewLink: "https://vessoni149.github.io/ResponsiveDesign-PlatziCourse.github.io/",
    githubLink: "https://github.com/Vessoni149/ResponsiveDesign-PlatziCourse.github.io",
    videoDemoLink: null
  },
  {
    title: "Calculator",
    image: projectImage2,
    description: `Calculator made in a React course in FreeCodeCamp.`,
    techstack: "React.js",
    previewLink: "https://vessoni149.github.io/calculadoraFreeCodeCamp/",
    githubLink: "https://github.com/Vessoni149/calculadoraFreeCodeCamp",
    videoDemoLink: null
  },
  {
    title: "To do list.",
    image: projectImage1,
    description: `To do list with data persistance in navigator`,
    techstack: "React.js",
    previewLink: "https://vessoni149.github.io/Curso-React_Platzi/",
    githubLink: "https://github.com/Vessoni149/Curso-React_Platzi",
    videoDemoLink: null
  },
];

