import "./Footer.css"
import { AiFillTrademarkCircle } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaHandsHelping } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="footerContainer">
            <div className="name">
                <p>Antonio Martinez <AiFillTrademarkCircle className="copyRight"/>Copy Right 2023</p>
            </div>
            <div className="pData">
                <p className="email"><AiOutlineMail className="mail"/>antoniomartinezb251@gmail.com</p>
                <p className="whatsApp"><BsWhatsapp className="logoW"/> 312-3152234747</p>
            </div>
            <div className="handHelp">
                <FaHandsHelping className="hand"/>
            </div>
        </div>
    )
}
              