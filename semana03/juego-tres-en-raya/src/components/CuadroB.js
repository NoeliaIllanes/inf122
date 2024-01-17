import React from 'react';
import '../style/Cuadro.css';

function CuadroB({ valor, funcion }) { // eslint-disable-line no-unused-vars
    return (
        <button className="cuadro" onClick={funcion}>
            {valor}
        </button>
    );
}

export default CuadroB;