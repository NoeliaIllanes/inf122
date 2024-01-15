import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const click = () => {
    setNumClicks(nroClicks + 1);
  }
  const reiniciar = () => {
    setNumClicks(0);
  }
  const suma3 = () => {
    setNumClicks(nroClicks +3);
  }
  const resta3 = () => {
    setNumClicks(nroClicks - 3);
  }
  const suma1 = () => {
    setNumClicks(nroClicks +1);
  }
  const resta1 = () => {
    setNumClicks(nroClicks -1);
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
          <Boton texto="- 3" esBotonClick={true}
            funcionClick={resta3} />
          <Boton texto="+ 1" esBotonClick={false}
            funcionClick={suma1} />
          <Boton texto="- 1" esBotonClick={false}
            funcionClick={resta1} />
          <Boton texto="+3" esBotonClick={false}
            funcionClick={suma3} />
          <div className='contenedor-reinicio'>
            <Boton texto="Reiniciar" className="reiniciar" esBotonClick={false} funcionClick={reiniciar} />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;