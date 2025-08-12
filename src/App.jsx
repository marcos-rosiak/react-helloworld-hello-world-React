// src/App.jsx

import './App.css';
import MiPrimerComponente from './components/MiPrimerComponente.jsx'; // Importamos el componente

function App() {
  return (
    <div className="App">
      <h1>Mi Aplicación de React</h1>
      <MiPrimerComponente /> {/* Usamos el componente aquí */}
    </div>
  );
}

export default App;
