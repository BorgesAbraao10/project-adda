import React from "react";
import { Navbar }from './components/Navbar/Navbar'

import './styles/App.css';
import { Article } from "./components/article/Article";


// Componente em classe é uma classe que herda uma classe Component do React e 
// retorna HTML dentro do método render.

class App extends React.Component {
    
    render() {
        return( 
        <>
            <Navbar />

            <section id="articles">
            <Article title='Exemplo 1' />
            <Article title='Exemplo 2' />
            <Article title='Exemplo 3' />
            <Article title='Exemplo 4' />
            </section>
        </>
        );   
    }
}

export default App;



















