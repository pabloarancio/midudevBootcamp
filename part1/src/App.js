import './App.css';
import Mensaje from './Mensaje.js';

const Description = () => {
  return <p>
    Esta es la app del curso fullstack bootcamp
  </p>
}
const App = () => {
  return (
    <div className="App">
      <Mensaje  message='Estamos trabajando' color='red'/>
      <Description />
    </div>
  );
}

export default App;
//prueba