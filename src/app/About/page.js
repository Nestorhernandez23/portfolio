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
      url: "https://x.com/alagranpuchic/with_replies",
      icon: <X />,
    },
    {
      name: "GitHub",
      url: "https://github.com/Nestorhernandez23",
      icon: <Github />,
    },
    {   
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nestor-hernandez100/",
      icon: <Linkedin />,
    },
  ];

  return (
    <div className="row-auto flex flex-col justify-center gap-4 xl:grid xl:grid-cols-2 xl:gap-6 xl:gap-x-16">
      <div className="order-2 col-start-1 row-span-3 xl:order-1">
        <TitleCard
          profile={false}
          title="I'm Nestor. I live in Orem, Utah where I develop the future."
          paragraphs={[
            "I am originally from El Salvador and am currently pursuing my Associate's degree in Computer Science at Ensign College. My journey into the world of web development began with learning the fundamentals of HTML and CSS, which laid the foundation for my understanding of web structure and design. These languages enabled me to create visually appealing and well-structured websites, fostering a strong interest in front-end development",
            "As I delved deeper into web technologies, I expanded my skill set to include JavaScript, which has been instrumental in bringing interactivity and dynamic features to my projects. My proficiency in JavaScript led me to explore modern frameworks like React and Next.js. These powerful tools have allowed me to build more complex and responsive web applications, enhancing user experiences and optimizing performance. React's component-based architecture and Next.js's server-side rendering capabilities have been particularly impactful in my work.",
            "Throughout my studies at Ensign College, I have continually applied my knowledge in various projects, from simple static websites to dynamic, full-stack applications. This hands-on experience has not only solidified my technical skills but also deepened my understanding of best practices in web development. I am passionate about creating efficient, user-friendly applications and am excited to continue learning and growing in this ever-evolving field.",
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
          <p>nestorisraelhernandez@gmail.com</p>
        </Link>
      </div>
    </div>
  );
}
