//SASS
import "../Styles/Components/sidebar.sass";

//Components
import { SocialMedia } from "./socialMedia";
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
        href="https://1drv.ms/b/s!AsRs4lRB2xg70XRIQPx3Kb4mSVtz?e=B495da"
        className="btn"
      >
        Visualizar Currículo
      </a>
    </aside>
  );
};
