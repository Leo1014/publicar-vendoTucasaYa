import "./Banner.css"
import cardHand from "/images/AutoHand.jpg"

export default function Banner(){
    return(
        <div className="containerBan">
            <h3>Trámites para su vehículo</h3>
        <div className="publicidad">
            <p>Asesoro y realizo cualquier tipo de trámite para su automor.</p> 
            <p>Respaldo: Casa Nacional del Conductor</p> 
        </div>
        <div className="card">
            <img src={cardHand} alt="card" className="autoHand" />
        </div>
        </div>
    )
}