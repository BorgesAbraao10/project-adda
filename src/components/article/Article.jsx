import React from 'react';

import ipadretina from '../../assets/ipad-retina.JPG';

import './styles.css';

export class Article extends React.Component {
    render() {
        return (
            <article id='article'>
                <img src={ipadretina} alt="" />

                <div className='article-infos'>
                    <h2>{this.props.title}</h2>
                    <h3>Nasa</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis porro dicta, error neque sapiente facere praesentium. Officiis laborum alias ratione blanditiis voluptatum minima neque architecto tenetur. Quod est repellat reprehenderit!</p>
                </div>
            </article>
        )
    }
}