import React from "react";
import { Navbar }from './components/Navbar/Navbar'

import './styles/App.css';
import { Article } from "./components/article/Article";

import imac from './assets/images/imac.JPG';
import ipod from './assets/images/ipod.JPG';
import macbook from './assets/images/macbook.JPG';
import ipad from './assets/images/ipad-retina.JPG';



// Componente em classe é uma classe que herda uma classe Component do React e 
// retorna HTML dentro do método render.

class App extends React.Component {
    
    render() {
        return( 
        <>
            <Navbar />

            <section id="articles">

            <Article title='Design Dashbords' 
            provider= "NASA" 
            descriptions= '...' 
            thumbinail={ipad}/>
        
            

                   
            <Article title='Vibrant Portaits of 2022'
            provider= 'Space News'
            descriptions= '...'
            thumbinail={imac} />

        

            <Article title='36 Days of Malaya type'
            provider= 'Spacefligtht Now' 
            descriptions= '...'
            thumbinail={ipod} />

            <Article title='Design Dashbords' 
            provider= "NASA" 
            descriptions= "..."
            thumbinail={macbook} />

            </section>
        </>
        );   
    }
}

export default App;



















