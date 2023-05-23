import "./Card.css"
import "./Flip_transition.css"


// @ts-ignore
function Card({onClick, back_continer, front_continer}) {
    return (
        <div className={"card"} onClick={onClick}>
            <div className={"card_back"}>{back_continer}</div>
            <div className={"card_front"}>{front_continer}</div>
        </div>
    );
}
export default Card;