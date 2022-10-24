//SASS
import "../Styles/Components/informationContainer.sass";

//React Icons
import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

export const InformationContainer = () => {
  return (
    <section id="info">
      <div className="info_card">
        <AiFillPhone id="phone_icon" />
        <div>
          <h3>Telefone</h3>
          <p>+55 (11) 98998-0189</p>
        </div>
      </div>
      <div className="info_card">
        <AiOutlineMail id="mail_icon" />
        <div>
          <h3>E-Mail</h3>
          <p>murillo.oliveira1234@outlook.com</p>
        </div>
      </div>
      <div className="info_card">
        <AiFillEnvironment id="pin_icon" />
        <div>
          <h3>Localização</h3>
          <p>Cotia - SP</p>
        </div>
      </div>
    </section>
  );
};
