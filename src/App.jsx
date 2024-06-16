import React from "react";
import Navbar from './components/Navbar/Navbar'

import './styles/App.css';


// Componente em classe é uma classe que herda uma classe Component do React e 
// retorna HTML dentro do método render.

class App extends React.Component {
    
    render() {
        return <Navbar />;
            
    }
}

export default App;



















