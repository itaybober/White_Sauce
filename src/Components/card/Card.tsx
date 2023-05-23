import "./Card.css"
import "./Flip_transition.css"

// @ts-ignore
function Card({onClick}){
    return(
    <div className={"card"} onClick={onClick}>
    <div className={"card_back"}>Back</div>
    <div className={"card_front"}>Front</div>
    </div>
    );
}
export default Card;