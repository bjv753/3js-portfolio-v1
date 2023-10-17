import {
      mobile,
      backend,
      creator,
      web,
      javascript,
      typescript,
      html,
      css,
      reactjs,
      redux,
      tailwind,
      nodejs,
      mongodb,
      git,
      figma,
      exercises,
      nike,
      rentacar,
      threejs,
    } from "../assets";
    
    export const navLinks = [
      {
        id: "about",
        title: "About",
      },
      {
        id: "work",
        title: "Work",
      },
      {
        id: "contact",
        title: "Contact",
      },
    ];
    
    const services = [
      {
        title: "Web Developer",
        icon: web,
      },
      {
        title: "React Developer",
        icon: mobile,
      },
      {
        title: "Backend Developer",
        icon: backend,
      },
      {
        title: "Content Creator",
        icon: creator,
      },
    ];
    
    const technologies = [
      {
        name: "HTML 5",
        icon: html,
      },
      {
        name: "CSS 3",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "TypeScript",
        icon: typescript,
      },
      {
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "Redux Toolkit",
        icon: redux,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name: "Node JS",
        icon: nodejs,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "Three JS",
        icon: threejs,
      },
      {
        name: "git",
        icon: git,
      },
      {
        name: "figma",
        icon: figma,
      },
    ];
    
    const projects = [
      {
        name: "Gym Exercises",
        description:
          "Rapid API based application that allows users to search for different strength training exercises, providing related videos from youtube, and a list of similar exercises that target the same muscle group.",
        tags: [
          {
            name: "react",
            color: "yellow-text-gradient",
          },
          {
            name: "rapidapi",
            color: "green-text-gradient",
          },
          {
            name: "materialui",
            color: "pink-text-gradient",
          },
        ],
        image: exercises,
        source_code_link: "https://github.com/bjv753/gym_exercises-v1",
        live_site_link: "https://gym-exercises-v1.netlify.app/",
      },
      {
        name: "Nike App",
        description:
          "Nike landing page that showcases different Nike Products.",
        tags: [
          {
            name: "react",
            color: "yellow-text-gradient",
          },
          {
            name: "tailwind",
            color: "green-text-gradient",
          },
          {
            name: "javascript",
            color: "pink-text-gradient",
          },
        ],
        image: nike,
        source_code_link: "https://github.com/bjv753/nike-v1",
        live_site_link: "https://nike-v1.netlify.app/",
      },
      {
        name: "Rent A Car",
        description:
          "A comprehensive Rent-A-Car application that allows users to search through a large selection of popular vehicle makes and models.",
        tags: [
          {
            name: "typescript",
            color: "yellow-text-gradient",
          },
          {
            name: "tailwind",
            color: "green-text-gradient",
          },
          {
            name: "nextjs",
            color: "pink-text-gradient",
          },
        ],
        image: rentacar,
        source_code_link: "https://github.com/bjv753/car_showcase-v1",
        live_site_link: "https://car-showcase-v1-ueq8.vercel.app/?manufacturer=bentley",
      },
    ];
    
    export { services, technologies, projects };