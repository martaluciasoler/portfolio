import React from 'react';
import '../stylesheets/Header.scss';
import ilustracion from '../data/ilustracion/ilustracion.png';
import mano from '../data/ilustracion/mano.png';

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
            <div class="content">
              <div class="content__container">
                <p class="content__container__text">
                  Aloha <a name="Aloha"></a>
                </p>

                <ul class="content__container__list">
                  <li class="content__container__list__item">everybody</li>
                  <li class="content__container__list__item">
                    soy Marta Soler
                  </li>
                  <li class="content__container__list__item">front - end</li>
                  <li class="content__container__list__item"> </li>
                  <li class="content__container__list__item"> </li>
                  <li class="content__container__list__item"> Developer</li>
                </ul>
              </div>
            </div>
            <div className="bio__description">
              <p>
                Venida del mundo de la farándula donde escribía y representaba
                obras para hacer sentir vivos a los demás, he aterrizado en el
                planeta del desarrollo front-end, vengo equipada con un cinturón
                lleno de herramientas que me permitirán crer, montar y desmontar
                cada proyecto desde cero, por suerte de mi planeta anterior
                (arteDramático, ilustración y diseño) traigo un estuche lleno de
                pinceles con paletas de mil colores con los que podré dar vida y
                una personalidad propia a cada uno de ellos. Soy una persona
                noble, leal, responsable, trabajadora, creativa y por lo que
                dicen mis compañeros bastante divertida con la que podrás
                compartir alegrías e ilusión.Ayudame a escribir mi propia
                historia.
              </p>
              <div className="bio__scrool">
                <a href="#Proyectos" tittle={this.props.tittle} className="a">
                  Proyectos
                </a>
                <a href="#Contacto" tittle={this.props.tittle} className="a">
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
