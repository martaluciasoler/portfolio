import React from 'react';
import '../stylesheets/Header.scss';
import ilustracion from '../data/ilustracion/ilustracion.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="bio">
          <h1 className="bio__name">Marta Lucía Soler</h1>
          <div>
            <img className="ilustracion" src={ilustracion} alt="Marta Soler" />
          </div>
          <div className="bio__description">
            <p>
              Venida del mundo de la farándula donde escribía y repesentaba
              obras para hacer sentir vivos a los demás, he aterrizado en el
              planeta del desarrollo front end, vengo equipada con un cinturón
              lleno de herramientas que me permitirán crer, montar y desmontar
              cada proyecto desde cero, por suerte de mi planeta anterior
              (arteDramático, ilustración y diseño) traigo un estuche lleno de
              pinceles con paletas de mil colores con los que podré dar vida y
              una personalidad propia a cada uno de ellos. Soy una persona
              noble, leal, responsable, trabajadora, creativa y por lo que dicen
              mis compañeros bastante divertida con la que podrás compartir
              alegrías e ilusión.Ayudame a escribir mi propia historia.
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
