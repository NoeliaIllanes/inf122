import React from 'react';

function Movimiento({ descripcion, funcion }) { // eslint-disable-line no-unused-vars
    return (

        <button className="movimiento" onClick={funcion}>
            {descripcion}
        </button>

    );
}

export default Movimiento;