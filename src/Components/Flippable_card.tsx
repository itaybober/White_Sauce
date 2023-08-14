import "./Flippable_card.css";
import Card from "./card/Card";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import "../Components/card/Flip_transition.css";

// @ts-ignore
function Flippable_card({ back_content, front_content }) {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className={"flippable_card_container"}>
      <CSSTransition in={showFront} timeout={300} classNames={"flip"}>
        <Card
          onClick={() => {
            setShowFront((v) => !v);
          }}
          back_continer={back_content}
          front_continer={front_content}
        />
      </CSSTransition>
    </div>
  );
}

export default Flippable_card;
