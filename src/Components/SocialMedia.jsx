//SASS
import "../Styles/Components/socialMedia.sass";

//React Icons
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const socialMedia = [
  {
    name: "linkedin",
    icon: <FaLinkedin />,
    access:
      "https://www.linkedin.com/in/murillo-lopes-b87912228?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0tOqcd2RSL2jg%2F9FjnKzYQ%3D%3D",
  },
  {
    name: "github",
    icon: <FaGithub />,
    access: "https://github.com/MurilloLopes14",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    access: "https://www.instagram.com/lilo_mx_",
  },
];

export const SocialMedia = () => {
  return (
    <section id="socialMedia">
      {socialMedia.map((media) => (
        <a
          href={media.access}
          className="social_btn"
          id={media.name}
          key={media.name}
        >
          {media.icon}
        </a>
      ))}
    </section>
  );
};
