import React from "react";
import UsesSection from "../../components/structure/Uses Card/UsesSection";
import TitleCard from "@/components/structure/TitleCard/TitleCard";

const Page = () => {
  const items = [
    {
      groupName: "Group 1",
      items: [
        { title: "Item 1", description: "Description 1" },
        { title: "Item 2", description: "Description 2" },
      ],
    },
    {
      groupName: "Group 2",
      items: [
        { title: "Item 3", description: "Description 3" },
        { title: "Item 4", description: "Description 4" },
      ],
    },
    {
      groupName: "Group 3",
      items: [
        { title: "Item 5", description: "Description 5" },
        { title: "Item 6", description: "Description 6" },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6 lg:w-full lg:max-w-3xl">
        {" "}
        <TitleCard
          title={
            "Software I use, gadgets I love, and other things I recommend."
          }
          paragraphs={[
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam\
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat\
        volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed\
        diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat\
        volutpat.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed\
        diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat\
        volutpat.",
          ]}
        />
      </div>

      <UsesSection className="mt-6" items={items} />
    </div>
  );
};

export default Page;
