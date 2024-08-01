import React from "react";
import ProjectCard from "../../components/structure/ProjectCard/ProjectCardComponent.jsx";
import TitleCard from "@/components/structure/TitleCard/TitleCard.jsx";

export default function Projects() {
  const projects = [
    {
      logo: "/landingpage.png",
      name: "FitClub",
      content:
        "For the Fitclub Gym website, I created a visually appealing landing page using HTML and CSS. This page features a clean, engaging design that effectively showcases the gym's offerings, including facilities, classes, and membership options. By leveraging HTML for structure and CSS for styling, I ensured the landing page is both user-friendly and attractive, providing a great first impression for potential members.",
      link: "https://nestorhernandez23.github.io/landing-page/",
    },
    {
      logo: "/Blackjack.png",
      name: "BlackJack",
      content:
        "In the Blackjack project, I completed the game's implementation by working with the existing PGame class, which I couldn't modify. I refined the PlayBlackJack class to meet the project requirements, such as hiding the dealer’s first card unless a Blackjack was dealt initially and adjusting various colors and fonts to match the specifications. This included ensuring cards, backgrounds, and buttons didn't use light gray or white and using a different font from sans serif.",
      link: "https://github.com/Nestorhernandez23/BlackJack.git",
    },
    {
      logo: "/Real.png",
      name: "Real Estate",
      content:
        "In the Real Estate project, I utilized Java to design and implement a robust class structure. The project involved building superclasses and subclasses to establish a three-level inheritance hierarchy. I incorporated method overloading with multiple signatures to enhance flexibility and functionality. Additionally, I created JUnit test cases to rigorously test constructors, getter methods, and setter methods, ensuring the reliability of the class structure. Throughout the development, I adhered to sound programming principles to design a clean, efficient, and maintainable class structure. ",
      link: "https://github.com/Nestorhernandez23/RealState.git",
    },
    {
      logo: "/dessert.png",
      name: "Dessert Shop",
      content:
        "In the Dessert Shop project, I used Java to enhance the application by adding an Admin module for managing detailed customer information. This module introduces a fifth menu option, allowing shop owners to access customer lists, view order histories, identify the best customer, or return to the previous menu. I utilized HashMaps to store and retrieve customer data and embedded data structures to manage and display order histories, providing efficient querying of customer details and a clear view of sales and customer activity.",
      link: "https://github.com/Nestorhernandez23/DessertShop.git",
    },
    {
      logo: "/file.png",
      name: "CSS Color Markers",
      content:
        "In the CSS     color Color Markers project, I designed a set of colored markers, exploring various methods for setting color values and experimenting with color pairings. This project allowed me to deepen my understanding of CSS color properties and create visually appealing designs by effectively combining different colors.",
      link: "https://github.com/Nestorhernandez23/CSS-Color-Markers.git",
    },
   
  ];

  return (
    <div className="flex flex-col gap-6">
      <TitleCard
        title="Things I've Made Trying to Put my Dent Into the Universe"
        paragraphs={[
          "Welcome to my portfolio! Here, you'll find a showcase of my work across various projects, demonstrating my skills in HTML, CSS, JavaScript, and Java. Each project highlights my journey and growth as a web developer, from crafting visually engaging web pages to building dynamic, interactive applications. Explore my projects to see how I've combined these technologies to create unique and functional solutions. Thank you for visiting, and I hope you enjoy what you see!",
        ]}
      />
      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
