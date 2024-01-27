import React from "react";
import "../style/Profile.css";
import perfil from "../images/foto-perfil.jpg";
import git from "../images/icons/github.svg";
import X from "../images/icons/twitter.svg";
import linke from "../images/icons/linkedin.svg";

function Profile() {
    const hyperlink = ()=>{
        window.open('https://github.com/NoeliaIllanes', '_blank')
        }
    return (
        <div className="main"> 
            <img className="img-perfil"  src={perfil}></img>
            <div className="perfil">
                <h1>Noelia Illanes</h1>
                <p>Junior Front end</p>
                <div className="icon-perfil">
                    <button onClick={hyperlink} ><img src={git}></img></button>
                    {/* <a href="https://github.com/NoeliaIllanes"><img  src={git}></img></a> */}
                    <a href="https://twitter.com/Noehgtdrd4rzdf3"><img src={X}></img></a>
                    <a href="www.linkedin.com/in/noelia-illanes123"><img src={linke}></img></a>
                </div>
                </div>
        </div>
    );
}

export default Profile;