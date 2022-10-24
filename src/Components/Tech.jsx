//SASS
import "../Styles/Components/tech.sass";

//React Icons
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiSass,
  DiMysql,
} from "react-icons/di";
import { SiNestjs, SiTypescript, SiMongodb } from "react-icons/si";

//Tech data
const technologies = [
  {
    id: "html",
    name: "HTML5",
    about: "Expriência avançada com HTML5 Semântico",
    icon: <DiHtml5 />,
  },
  {
    id: "css",
    name: "CSS3",
    about: "Estilização semântica e organizada com CSS3",
    icon: <DiCss3 />,
  },
  {
    id: "js",
    name: "JavaScript",
    about: "JavaScript orientado, semântico e atualizado",
    icon: <DiJsBadge />,
  },
  {
    id: "ts",
    name: "TypeScript",
    about: "Conhecimento abrangente com tipagem e orientação a objetos",
    icon: <SiTypescript />,
  },
  {
    id: "node",
    name: "NodeJs",
    about: "Experiência com CRUD, sistemas e atuenticação",
    icon: <DiNodejsSmall />,
  },
  {
    id: "react",
    name: "ReactJs",
    about: "Conhecimento com componentes e Lógica de Front-end",
    icon: <DiReact />,
  },
  {
    id: "nest",
    name: "NestJs",
    about: "Progresso notável em CRUD, sistemas, atuenticação e segurança",
    icon: <SiNestjs />,
  },
  {
    id: "sass",
    name: "SASS",
    about: "Estilização componentizada e com arquitetura lógica",
    icon: <DiSass />,
  },
  {
    id: "mongo",
    name: "MongoDB",
    about: "Conhecimento avançado com o banco de dados e requisições",
    icon: <SiMongodb />,
  },
  {
    id: "mysql",
    name: "MySQL",
    about: "Conhecimento com arquitetura de dados e leitura de tabelas",
    icon: <DiMysql />,
  },
];

export const Tech = () => {
  return (
    <section className="tech_container">
      <h2>Tecnologias</h2>
      <div className="tech_grid">
        {technologies.map((tech) => (
          <div className="tech_card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="tech_info">
              <h3>{tech.name}</h3>
              <p>{tech.about}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
