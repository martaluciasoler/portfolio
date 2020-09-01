import React from 'react';
import Icon from './Icon';
import '../stylesheets/Contact.scss';

class Contact extends React.Component {
  render() {
    const contactResult = this.props.infoContact.map((info) => {
      return (
        <div>
          <Icon tittle={info.tittle} icon={info.icon} href={info.href} />
        </div>
      );
    });
    return (
      <ul>
        <div className="contactContainer">
          <li className="contactContainer__list">
            {contactResult}
            <a name="Contacto"></a>
          </li>
          <a
            href="#Aloha"
            tittle={this.props.tittle}
            className="contactContainer__aloha"
          >
            Aloha
          </a>
        </div>
      </ul>
    );
  }
}

export default Contact;
