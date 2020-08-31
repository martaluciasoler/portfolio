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
        <div>
          <li className="contactContainer">
            {contactResult} <a name="contacto"></a>
          </li>
        </div>
      </ul>
    );
  }
}

export default Contact;
