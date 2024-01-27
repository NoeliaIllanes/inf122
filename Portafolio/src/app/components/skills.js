import style from './skills.module.css';

export default function Skills(){
    return(
        <div className={style.container}>
            <div className={style["portf-btn"]}>
                <button>
                    <p>Portfolio</p>
                </button>
            </div>
            <div className={style["skills-btn"]}>
                <button>
                    <p>Skills</p>
                </button>
            </div>
        </div>
    )
}