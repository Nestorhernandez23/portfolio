import TitleCard from "@/components/structure/TitleCard/TitleCard";
import Image from "next/image";
import Link from "next/link";

// Icons
import Linkedin from "@/components/ui/icons/linkedin";
import Github from "@/components/ui/icons/github";
import X from "@/components/ui/icons/x";
import EmailComponent from "@/components/ui/icons/email";

export default function About() {
  const socials = [
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

  return (
    <div className="row-auto flex flex-col justify-center gap-4 xl:grid xl:grid-cols-2 xl:gap-6 xl:gap-x-16">
      <div className="order-2 col-start-1 row-span-3 xl:order-1">
        <TitleCard
          profile={false}
          title="I'm Jane. I live in New York City, where I develop the future."
          paragraphs={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur turpis et risus facilisis vestibulum. Integer luctus erat eu rutrum aliquam. Pellentesque eget rhoncus mauris. Etiam pretium neque leo, non semper erat aliquam porttitor. Pellentesque finibus vehicula euismod. Sed imperdiet diam sed tortor porttitor pellentesque. Sed venenatis lacus lobortis augue pretium, non venenatis libero posuere. Praesent quis elit molestie, facilisis nisi vitae, sagittis augue.",
            "Nunc ornare hendrerit imperdiet. Morbi id porttitor justo. Maecenas ac consequat mi. Mauris ullamcorper lobortis orci iaculis auctor. Praesent pellentesque lacus sed metus volutpat tincidunt. Pellentesque euismod nulla augue, ac euismod augue hendrerit at. Nullam augue risus, ornare at mollis quis, iaculis in neque. Mauris ligula orci, sagittis sit amet metus sed, finibus semper nulla. Mauris ut condimentum massa. Donec nec tincidunt lectus. Curabitur commodo et ex vel dignissim. Fusce varius turpis nec augue sagittis varius. Mauris blandit purus eu purus finibus, et cursus diam finibus. Phasellus pharetra congue aliquam.",
            "Ut risus libero, tristique quis blandit et, maximus eget arcu. Donec nulla leo, laoreet vitae nibh nec, pulvinar facilisis nulla. Curabitur sagittis augue sed enim rhoncus, sed posuere enim vulputate. Donec dapibus arcu eget ligula porta, non viverra arcu tristique. Nunc ut turpis libero. Quisque at justo sodales, consequat diam non, suscipit sem. Duis et massa id orci egestas suscipit in vel justo. Aenean venenatis id dui eget consequat. Nullam iaculis euismod velit vitae luctus. Nulla facilisi.",
          ]}
        />
      </div>
      <div className="order-1 flex h-fit justify-center bg-teal-500 lg:col-start-2 lg:row-start-1 lg:bg-transparent xl:order-3 xl:justify-start">
        <Image
          src={"/Profile.jpg"}
          alt="hero"
          width={500}
          height={500}
          className="size-[464px] h-[452px] object-cover object-center 2xl:h-max 2xl:w-max"
        />
      </div>
      <div className="order-3 flex flex-col justify-around gap-1 p-1 text-zinc-800 dark:text-zinc-300 lg:order-4 lg:col-start-2 lg:row-start-2">
        {socials.map((social, key) => {
          return (
            <div key={key} className="flex gap-1 px-2">
              <Link
                href={social.url}
                target="_blank"
                className="flex items-center gap-2 py-2"
              >
                {social.icon}
                <p className="">Follow me on {social.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="order-4 flex w-fit border-t border-zinc-100 px-1 py-8 text-zinc-800 dark:border-zinc-600 dark:text-zinc-300 lg:order-4 lg:col-start-2 lg:row-start-3">
        <Link
          href="mailto:john@email.com"
          className="flex items-center gap-2 px-2"
          target="_blank"
        >
          <EmailComponent />
          <p>jhon@email.com</p>
        </Link>
      </div>
    </div>
  );
}
