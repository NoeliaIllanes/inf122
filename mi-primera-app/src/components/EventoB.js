import React from "react";
import "../styles/Evento.css";
function EventoB(props) {
    return (
        <div className="card-container">

            <img className="card-image"
                src={require(`../images/${props.image}.jpeg`)} 
                alt="Foto del evento" />


            <div className="card-content">
                {/* props se usa cuando se llaman valores  */}
                <h2 className="card-title">{props.title}</h2>
                <p className="card-date">{props.dateLiteral}</p>
                <p className="card-place">{props.placeLiteral}</p>
                <p className="card-description">{props.description}</p>
                <div>
                    <img class
                </div>
            </div>
        </div>
    );
}

export default EventoB;