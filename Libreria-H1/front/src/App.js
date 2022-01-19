import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Barra from './componentes/Barra';
import Footer from './componentes/Footer';
import Ingresar from './componentes/Ingresar';
import RegistrarUsuario from './componentes/RegistrarUsuario';
import Principal from './componentes/Principal';


function App() {
  return (
    <Router>
      <Barra/>
      
      <Route path='/ingresar' exact component={Ingresar}/>
      <Route path='/registrarUsuario' exact component={RegistrarUsuario}/>
      <Route path='/' exact component={Principal}/>
      
      
      <Footer/>
    </Router>
    
  );
}

export default App;
