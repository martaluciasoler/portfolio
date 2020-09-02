import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.scss';
import ilustracion from '../data/ilustracion/ilustracion.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="bio">
          <div className="bio__container">
            <div>
              <img
                className="ilustracion"
                src={ilustracion}
                alt="Marta Soler"
              />
            </div>
            <span className="bio__aloha">Aloha</span>
            <h1 className="bio__name">Soy Marta Soler</h1>
            <div className="bio__description">
              <p>
                Venida del mundo de la farándula donde escribía y representaba
                obras para hacer sentir vivos a los demás, he aterrizado en el
                planeta del<span className="front"> desarrollo front-end</span>,
                vengo equipada con un cinturón lleno de herramientas que me
                permitirán crear, montar y desmontar cada proyecto desde cero,
                por suerte de mi planeta anterior
                <span className="art">
                  {' '}
                  (arteDramático, ilustración y diseño)
                </span>
                traigo un estuche lleno de pinceles con paletas de mil colores
                con los que podré dar vida y una personalidad propia a cada uno
                de ellos. Soy una persona noble, leal, responsable, trabajadora,
                creativa y divertida con la que podrás compartir alegrías e
                ilusión.
                <p className="bio__p">Ayudame a escribir mi propia historia.</p>
              </p>
              <div className="bio__scrool">
                <Link
                  to={'/projects'}
                  tittle={this.props.tittle}
                  className="link"
                >
                  Proyectos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
