//SASS
import "../Styles/Components/sidebar.sass";

//Components
import { SocialMedia } from "./SocialMedia";
import { InformationContainer } from "./InformationContainer";

//Utils
import Avatar from "../assets/IMG/Perfil_02.jfif";

export const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Murillo Lopes" />
      <p className="title">Desenvolvedor de Sistemas</p>
      <SocialMedia />
      <InformationContainer />
      <a
        href="https://drive.google.com/file/d/13bNn021Xij1dUILBBPCYy6B5i5iUrvo8/view?usp=sharing"
        className="btn"
      >
        Visualizar Currículo
      </a>
    </aside>
  );
};
