import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className="contactContainer">
        <li className="contactContainer__list">{contactResult}</li>
        <Link
          to={'/'}
          tittle={this.props.tittle}
          className="contactContainer__aloha"
        >
          Aloha
        </Link>
      </div>
    );
  }
}

export default Contact;
