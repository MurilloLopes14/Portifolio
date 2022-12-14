//SASS
import "./Styles/Components/app.sass";

//Components
import { Sidebar } from "./Components/Sidebar";
import { MainContent } from "./Components/MainContent";

function App() {
  return (
    <section id="portifolio">
      <h1>Murillo Lopes</h1>
      <Sidebar />
      <MainContent />
    </section>
  );
}

export default App;
