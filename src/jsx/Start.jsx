import "../css/Start.css"
import { IoIosArrowForward } from 'react-icons/io';


export default function Start(){  
    return(
        <>
        <div>
            <img src="profile.png"></img>
        </div>
        <p className="slog">Join the Fun with Party Pals: Friends Just a Click Away!</p>
        <div className="container">
        <div className="cnt">
            <img src="orbit.png" className="world"/>
        </div>
        <div className="icon_c">
            <img src="smiley.png" className="emoji"/>
        </div>
        </div>
        <div>
            <IoIosArrowForward className="icon"/>
        </div>
        </>
    )
}
