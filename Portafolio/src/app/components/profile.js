import Image from "next/image";
import style from './profile.module.css';
import prof from '../images/foto.jpg';
import git from '../icons/github.svg';
import link from '../icons/linkedin.svg';
import twitt from '../icons/twitter.svg';
import yt from '../icons/youtube.svg';

export default function Profile(){
    return(
        <div className={style.container}>
            <div> 
                <Image src={prof} className={style["profile-image"]}></Image>
            </div>
            <div className={style["text-container"]}>
                <h1 className={style.title}>Noelia Illanes</h1>
                <p className={style["short-description"]}>Junior Developer</p>
                <div className={style["icons-container"]}>
                    <div className={style["icons-container"]}>
                        <a href="https://github.com/NoeliaIllanes"><Image src={git}></Image></a>
                        <a href="https://twitter.com/Noehgtdrd4rzdf"><Image src={twitt}></Image></a>
                        <a href="https://www.linkedin.com/in/noelia-illanes-6606571bb/"><Image src={link}></Image></a>
                        <a href="https://www.youtube.com/@noeliaillanes5830"><Image src={yt}></Image></a>
                    </div> 
                </div>
            </div>
        </div>
        )
}



{/* // "use client"

// import style from "./perfil.module.css"
// function Perfil(){ */}
{/* //     return(
//         <div className={style["profile"]}>
//                 <figure className={style["profile-img"]}>
//                     <img src="perfil.jpeg"/>
//                 </figure>
//                 <div className={style["profile-info"]}>
//                     <h1>Alejandro Angel</h1>
//                     <h1>Cruz Chacon</h1>
//                     <p>junior developer</p>
//                     <div className={style["profile-social"]}>
//                         <a href="https://github.com/Alejandrocruz202" target="_blank">
//                             <img src="./github.svg" className={style["icon"]}/>
//                         </a> 
//                         <a href="https://www.facebook.com/profile.php?id=61555775708942" target="_blank">
//                             <img src="./linkedin.svg" className={style["icon"]}/>
//                         </a> 
//                         <a href="https://www.youtube.com/channel/UCaEXxTyIai1EMU8x_4rBj6Q" target="_blank">
//                             <img src="./youtube.svg" className={style["icon"]}/>
//                         </a> 
//                         <a href="https://twitter.com/AngelskiandHell" target="_blank">
//                             <img src="./twitter.svg" className={style["icon"]}/>
//                         </a> 
//                     </div>
//                 </div>
//             </div>
//     );
    
// }
// export default Perfil; */}