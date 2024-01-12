import logo from "./logo.svg";
import "./App.css";
import Evento from "./components/Evento.js";
import EventoB from "./components/EventoB.js";
import EventoC from "./components/EventoC.js";

function App() {
  return (
    <div className="App">
      {/* para mostrar todo lo que contiene pero sin poner toda la linea de código */}
      <Evento
        title="Py Pizza 03 - PyPuzzle"
        image="evento1"
        dateLiteral="09 de Diciembre de 2023 - 13:30 GMT-4"
        placeLiteral="Mr Pizza, 20 de Octubre Frente a la Plaza Abaroa, La Paz, Bolivia"
        description="
        ¡Hola Pythonista!
        Participa en este Evento Presencial de la comunidad Python La Paz
        ¿Cuánto conoces de Python?
        Aprende a trabajar en equipo resolviendo increíbles acertijo
        ¡Anímate a ser parte de esta actividad!
        "
      />
      <EventoB
        title="MeetUp 11 - 3 Pitfalls de la Ingeniería de datos (donde no meter la pata)"
        image="evento2"
        dateLiteral="25 de Noviembre de 2023"
        placeLiteral="Online"
        description="
        ¡Hola Pythonista!
        Acompáñanos al MeetUp mensual de la comunidad Python La Paz
        En este MeetUp tendremos la participación de Valery Calderon Briz, Ingeniera en Telecomunicaciones actualmente trabajando como Ingeniera de datos Senior en One.Five
        Anteriormente Co-organizadora de Pyladies MX y Líder de la comunidad Python Guatemala
        ha impartido conferencias y talleres en diversas PyCon en múltiples países."
      />

      <EventoC
        title="MeetUp 05 - ¿Cúando escucho música Bad Bunny?"
        image="evento3"
        dateLiteral="22 de Octubrede 2022 Online"
        placeLiteral="Git Scraping: automatizando recolectar y publicar datos con GitHub Action"
        description="
        La participación de Sergio Sanchez conocido también por el blog de visualización de datos Tacos de 
        Datos
        "
      />
    </div>
  );
}

export default App;
