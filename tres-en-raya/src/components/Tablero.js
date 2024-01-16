import React from 'react';
import '../style/Tablero.css';
import Cuadro from './Cuadro';
function Tablero() {
    return (
        <div className="tablero">
            <Cuadro valor={0} />
            <Cuadro valor={1} />
            <Cuadro valor={2} />
            <Cuadro valor={3} />
            <Cuadro valor={4} />
            <Cuadro valor={5} />
            <Cuadro valor={6} />
            <Cuadro valor={7} />
            <Cuadro valor={8} />
        </div>
    );
}
export default Tablero;














// import React from "react";
// import '../style/Tablero.css';
// import Cuadro from "./Cuadro";
// import { useState } from "react";

// function Tablero(){
//     const click = () => {
//         console.log('click');
//     }
//     return(
//         <div className="tablero">
//             <Cuadro valor={0} function={click} />
//             <Cuadro valor={1} function={click}  />
//             <Cuadro valor={2} function={click}  />
//             <Cuadro valor={3} function={click} />
//             <Cuadro valor={4} function={click} />
//             <Cuadro valor={5} function={click} />
//             <Cuadro valor={6} function={click} />
//             <Cuadro valor={7} function={click} />
//             <Cuadro valor={8} function={click}/>
//         </div>
//     );
// }
// export default Tablero;

