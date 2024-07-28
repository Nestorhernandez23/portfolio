import React from "react";
import ProjectCard from "../../components/structure/ProjectCard/ProjectCardComponent.jsx";
import TitleCard from "@/components/structure/TitleCard/TitleCard.jsx";

export default function Projects() {
  const projects = [
    {
      logo: "/ensignlogo.png",
      name: "Company 1",
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum habitasse aenean neque quam torquent eu penatibus!",
      link: "#",
    },
    {
      logo: "/ensignlogo.png",
      name: "Company 2",
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum habitasse aenean neque quam torquent eu penatibus!",
      link: "#",
    },
    {
      logo: "/ensignlogo.png",
      name: "Company 3",
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum habitasse aenean neque quam torquent eu penatibus!",
      link: "#",
    },
    {
      logo: "/ensignlogo.png",
      name: "Company 4",
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum habitasse aenean neque quam torquent eu penatibus!",
      link: "#",
    },
    {
      logo: "/ensignlogo.png",
      name: "Company 5",
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum habitasse aenean neque quam torquent eu penatibus!",
      link: "#",
    },
    {
      logo: "/ensignlogo.png",
      name: "Company 6",
      content:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Interdum habitasse aenean neque quam torquent eu penatibus!",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <TitleCard
        title="Things I've Made Trying to Put my Dent Into the Universe"
        paragraphs={[
          "Lorem ipsum odor amet, consectetuer adipiscing elit. Dignissim tellus sit fringilla porttitor; dictumst dignissim ridiculus varius? Rhoncus pulvinar pharetra ullamcorper eu; vestibulum per. Cursus dignissim a parturient per platea auctor nisi maecenas cras. Posuere urna habitant ullamcorper aliquet enim ullamcorper accumsan hac maximus? Etiam primis euismod condimentum ultrices platea. Amet platea metus varius feugiat nulla nam habitasse.",
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
