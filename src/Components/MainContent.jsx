//SASS
import "../Styles/Components/mainContent.sass";

//Components
import { About } from "./About";
import { Projects } from "./Projects";
import { Tech } from "./Tech";

export const MainContent = () => {
  return (
    <main id="main_content">
      <About />
      <Tech />
      <Projects />
    </main>
  );
};
