import Link_icon from "@/components/ui/icons/link-icon";
import Image from "next/image";
import "./ProjectCard.css";
import PropTypes from "prop-types";

const ProjectCard = ({ logo, name, content, link = "#" }) => {
  return (
    <div data-testid="projectCard" className="project-card">
      <div>
        <Image
          src={logo}
          alt={`${name} Logo`}
          width={500}
          height={800}
          className="project-card-logo h-100 w-90 quaility = {100} rounded-lg object-scale-down  drop-shadow-xl" 
        />
        <div className="dark:text-white  text-black ">
          <h2 data-testid="projectCardName">{name}</h2>
        </div>
      </div>
      <div>
        <p data-testid="projectCardContent">{content}</p>

        <a
          data-testid="projectCardLink"
          href={link}
          target="_blank"
          rel="noreferrer"
          className="dark:text-white text-black project-link flex items-center space-x-2 mt-4"
        >
          <Link_icon />
          <div className="dark:text-white text-black">
            <span>View Project</span>
          </div>
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default ProjectCard;
