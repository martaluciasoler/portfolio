import React from 'react';
import '../stylesheets/Icon.scss';

class Icon extends React.Component {
  render() {
    return (
      <li>
        <div className="contact">
          <a href={this.props.href} tittle={this.props.tittle}>
            <img className="contact__img" src={this.props.icon} />
          </a>
        </div>
      </li>
    );
  }
}

export default Icon;
