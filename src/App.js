import logo from './logo.svg';
import './App.css';

function HolaMundo(profesion, edad){
  const texto = (
    <div>
      <h3> Tengo {edad} años </h3>
      <h4> y me dedico al {profesion}</h4>
      <p>Recordar que en mis variables solo se permite una etiqueta html o puedo incluir varias "dentro de una sola etiqueta"</p>
    </div>
  )

  return texto;
}

function App() {
  const nombre ="German Romano Alvarez"
  const profesion = "Desarrollo web"
  const presentacion = <h2>Hola, soy {nombre}</h2>
  const edad = 31

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Estamos en <code>src/App.js</code>.
          El index.js inserta este componente App en el div con id root del index.html! 
        </p>
        {alert("En este componente App utilizo LENGUAJE JSX, donde puedo con {} meter javaScript")}
        {presentacion}
        {HolaMundo(profesion, edad)}

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
