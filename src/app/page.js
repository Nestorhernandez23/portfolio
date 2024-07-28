import TitleCard from "@/components/structure/TitleCard/TitleCard";
import SignupWidget from "@/components/structure/Signup/SignupWidget";
import ArticleCard from "@/components/structure/ArticleCard/ArticleCard";
import WorkWidget from "@/components/structure/WorkWidget/WorkWidget";
import SkillsWidget from "@/components/structure/SkillsWidget/SkillsWidget";

//Icons
import Linkedin from "@/components/ui/icons/linkedin";
import Github from "@/components/ui/icons/github";
import X from "@/components/ui/icons/x";
import Link from "next/link";

export default function Home() {
  const links = [
    {
      name: "X",
      url: "https://www.twitter.com/jane-doe",
      icon: <X />,
    },
    {
      name: "GitHub",
      url: "https://www.github.com/jane-doe",
      icon: <Github />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jane-doe",
      icon: <Linkedin />,
    },
  ];

  const articles = [
    {
      date: "Nov 15, 2021",
      title: "Everything you need to know about React",
      content:
        "The ability to build stuff in React is one of the hottest skills to have today in software engineering. There is a lot of demand for React developers among startups as well as MNCs.",
      link: "https://medium.com/the-research-nest/everything-you-need-to-know-about-react-ab24da4275ea",
    },
    {
      date: "Sep 2, 2020",
      title: "The Missing Introduction to React",
      content:
        "React is the world’s most popular JavaScript framework, but it’s not cool because it’s popular. It’s popular because it’s cool. Most React introductions jump right into showing you examples of how to use React, and skip the “why”.",
      link: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76",
    },
  ];

  return (
    <div className="flex h-full flex-col gap-6">
      <div className="flex flex-col gap-6 lg:w-full lg:max-w-3xl">
        <TitleCard
          profile={true}
          title={"Software engineer, father, and believer"}
          paragraphs={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur turpis et risus facilisis vestibulum. Integer luctus erat eu rutrum aliquam. Pellentesque eget rhoncus mauris. Etiam pretium neque leo, non semper erat aliquam porttitor. Pellentesque finibus vehicula euismod. Sed imperdiet diam sed tortor porttitor pellentesque. Sed venenatis lacus lobortis augue pretium, non venenatis libero posuere. Praesent quis elit molestie, facilisis nisi vitae, sagittis augue. ",
          ]}
        />
        <div className="flex gap-3">
          {links.map((link, key) => {
            return (
              <Link key={key} href={link.url} target="_blank">
                {link.icon}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex w-fit flex-col gap-10 py-8 lg:w-full lg:max-w-lg">
          {articles.map((article, key) => {
            return (
              <ArticleCard
                key={key}
                date={article.date}
                title={article.title}
                content={article.content}
                link={article.link}
              />
            );
          })}
        </div>
        <div className="flex flex-col gap-10 py-8 lg:w-full lg:max-w-sm">
          <SignupWidget
            title="Stay up to date"
            content="Get notified when I publish something new, and unsubscribe at any time."
          />
          <WorkWidget />
          <SkillsWidget />
        </div>
      </div>
    </div>
  );
}
