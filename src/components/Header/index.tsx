import React, { FunctionComponent } from "react";
import { ReactComponent as Logo } from "../../assets/jogo-da-memoria.svg";
import { Container } from "./styles";

export const Header: FunctionComponent = () => {
  return (
    <Container>
      <div className="container">
        <Logo></Logo>
        <div>
          <select name="level" id="level">
            <option value="normal">Normal</option>
            <option value="intermediario">Intermediario</option>
            <option value="anvacado">Avancado</option>
          </select>
        </div>
      </div>
    </Container>
  );
};
