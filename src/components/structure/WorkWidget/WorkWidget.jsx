import Workcard from "../WorkCard/WorkCard";
import WorkComponent from "@/components/ui/icons/work";

const WorkWidget = () => {
  const workExperience = [
    {
      company: "Slack",
      title: "Software Engineer",
      yearStart: "2019",
      image: "/slack.png",
    },
    {
      company: "Spotify",
      title: "Software Engineer",
      yearStart: "2017",
      yearEnd: "2019",
      image: "/spotify.png",
    },
    {
      company: "Audible",
      title: "Software Engineer",
      yearStart: "2017",
      yearEnd: "2019",
      image: "/audible.png",
    },
    {
      company: "Microsoft",
      title: "Software Engineer",
      yearStart: "2015",
      yearEnd: "2017",
      image: "/microsoft.png",
    },
  ];

  return (
    <div className="rounded-2xl border border-zinc-100 p-6">
      <div>
        <div className="flex items-center gap-3">
          <WorkComponent />
          <h2 className="font-bold text-zinc-900 dark:text-zinc-100">
            Work Experience
          </h2>
        </div>
        <div className="pt-2 text-sm dark:text-zinc-400">
          I have worked with some of the best companies in the world.
        </div>
      </div>
      <div className="flex w-full flex-col gap-4 pt-6">
        {workExperience.map((company, key) => {
          return (
            <Workcard
              key={key}
              image={company.image}
              company={company.company}
              title={company.title}
              yearStart={company.yearStart}
              yearEnd={company.yearEnd}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkWidget;
