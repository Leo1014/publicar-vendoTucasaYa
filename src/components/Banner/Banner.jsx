import "./Banner.css"
import cardHand from "/images/AutoHand.jpg"

export default function Banner(){
    return(
        <div className="containerBan">
            <h3>Trámites para vehículos</h3> 
        <div className="card">
            <img src={cardHand} alt="card" className="autoHand" />
        </div>
        </div>
    )
}