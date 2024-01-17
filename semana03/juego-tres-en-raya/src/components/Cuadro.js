import React from 'react';
import '../style/Cuadro.css';

function Cuadro({ valor }) { // eslint-disable-line no-unused-vars
    return (
        <button className="cuadro">
            {valor}
        </button>
    );
}

export default Cuadro;