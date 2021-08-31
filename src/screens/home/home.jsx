import { useState, React } from "react";
import { Flagger } from "../../components/flager.component";
import InputComponent from "../../components/input.component";
import { send_alert } from "../../services/utils.service";
import { ButtonSend, HomeStyled } from "./home.styled";

export const Home = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const sendData = () => {
    if (!name) {
      send_alert("Nome é obrigatório!");
      document.getElementById("name").focus();
      return;
    } else if (!age) {
      send_alert("Idade é obrigatória!");
      document.getElementById("age").focus();
      return;
    } else {
      alert("Enviando dados...");
    }
  };

  return (
    <HomeStyled>
      <InputComponent
        label="Digite seu nome:"
        width="33vw"
        margin="12px 0 0 12px"
        onChange={(event) => setName(event.target.value)}
        id="name"
      />
      <Flagger text="Nome é obrigatório!" margin="0 0 0 12px" flag={name} />
      <InputComponent
        label="Digite sua idade:"
        width="33vw"
        margin="12px 0 0 12px"
        type="number"
        onChange={(event) => setAge(event.target.value)}
        id="age"
      />
      <Flagger text="Idade é obrigatória!" margin="0 0 0 12px" flag={age} />
      <br />
      <br />
      <ButtonSend onClick={sendData}>Enviar</ButtonSend>
    </HomeStyled>
  );
};
