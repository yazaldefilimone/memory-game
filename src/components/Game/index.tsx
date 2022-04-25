import React, { FunctionComponent } from "react";

import { Container, Wrapper, BackView, FrontView } from "./styles";
import logo1 from "../../assets/Image-1.png";
import logo2 from "../../assets/Image-2.png";
import logo3 from "../../assets/Image-3.png";
import logo4 from "../../assets/Image-4.png";
import logo5 from "../../assets/Image-5.png";
import logo6 from "../../assets/eye_angle.png";
import logo7 from "../../assets/Image.png";
import logo8 from "../../assets/book_angle.png";
import logo9 from "../../assets/Web.png";
import logo10 from "../../assets/xbox.png";
import quest from "../../assets/_.png";

const Games = [
  [logo1, logo1],
  [logo2, logo2],
  [logo4, logo4],
  [logo5, logo5],
  [logo6, logo6],
  [logo7, logo7],
  [logo8, logo8],
  [logo9, logo9],
  [logo10, logo10],
  [logo1, logo1],
  [logo2, logo2],
  [logo4, logo4],
  [logo5, logo5],
  [logo6, logo6],
  [logo7, logo7],
  [logo8, logo8],
  [logo9, logo9],
  [logo10, logo10],
];

const CreateElemets = () => {
  let element: Array<string> = [];

  for (let index = 0; index < Games.length + 1; index++) {
    let indexRandm = Math.floor(Math.random());
    if (Games[index]) {
      // for (let indexx = 0; indexx < 3; indexx++) {
      element.push(Games[index][indexRandm]);
      // }
    }
  }

  return element;
};

const elements = CreateElemets();

export const Game: FunctionComponent = () => {
  const [value, setValue] = React.useState(1);
  const [Try, setTry] = React.useState(1);
  let choose1: any;
  let choose2: any;

  function makeMatchOrFalseCards(choose1: any, choose2: any) {
    let img1 = choose1.querySelector(".bg").src;
    let img2 = choose2.querySelector(".bg").src;
    if (img1 === img2 && img2 === img1) {
      if (value === 9) {
        alert("veceu");
      }
      setValue(value + 1);
      choose1.classList.add("done");
      choose2.classList.add("done");
      console.log(value);
      return;
    }

    setTry(Try + 1);
    console.log({ teta: Try });
    setTimeout(() => {
      choose1.classList.add("error");
      choose2.classList.add("error");
    }, 400);
    setTimeout(() => {
      choose1.classList.remove("active");
      choose2.classList.remove("active");
      choose1.classList.remove("error");
      choose2.classList.remove("error");
    }, 800);

    return;
  }

  function handlerClick({ target }: any) {
    let card = target;

    if (card !== choose1) {
      target.classList.add("active");
      if (!choose1) {
        return (choose1 = target);
      }
      choose2 = target;

      makeMatchOrFalseCards(choose1, choose2);
      choose1 = null;
      choose2 = null;
    }
  }
  React.useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll(".GAME > *").forEach((element) => {
        element.classList.add("active");
      });
      setTimeout(() => {
        document.querySelectorAll(".GAME > *").forEach((element) => {
          element.classList.remove("active");
        });
      }, 2000);
    });

    // choose1.classList.add("active");
    // choose2.classList.add("active");

    // setTimeout(() => {
    //   choose1.classList.remove("active");
    //   choose2.classList.remove("active");
    // }, 200);
  }, []);

  return (
    <Container>
      <div className="container GAME">
        {elements.map((game, index) => (
          <Wrapper id={game} data-id={index} key={index} onClick={handlerClick}>
            <BackView className="back">
              <img src={quest} alt="" />
            </BackView>
            <FrontView className="front">
              <img src={game} alt="game" className="bg" />
            </FrontView>
          </Wrapper>
        ))}
      </div>
    </Container>
  );
};
