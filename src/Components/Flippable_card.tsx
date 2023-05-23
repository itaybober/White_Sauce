import "./Flippable_card.css";
import Card from "./card/Card";
import {CSSTransition} from "react-transition-group";
import {useState} from "react";
import "../Components/card/Flip_transition.css";
function Flippable_card(){
const [showFront,setShowFront] = useState(true);
    return(
        <div className={"flippable_card_container"}>
            <CSSTransition
                in={showFront} timeout={300} classNames={"flip"}>
                {/*in- is for the start the CSS animation*/}

                <Card onClick={() => {
                    setShowFront((v) => !v);
                } }/>
            </CSSTransition>

        </div>
    )
}

export default Flippable_card;