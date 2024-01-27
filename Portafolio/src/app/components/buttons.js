"use client" 
import style from './buttons.module.css';
import Image from 'next/image';
import down from '../icons/download.svg';

export default function Buttons(){
    return(
        <div className={style.container}>
            <div className={style["download-btn"]}>
                <button onClick={()=> alert("Download document")}>
                    <p>Download CV</p>
                    <Image src={down}></Image>
                </button>
            </div>
            <div className={style["contact-btn"]}>
                <button>
                    <p>Contact me</p>
                </button>
            </div>
        </div>
    )
}