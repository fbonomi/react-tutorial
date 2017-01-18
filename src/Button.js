import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  foooooo = () => {
    alert("ho cliccato")
  }

  render() {
    return (
      <button className="button" onClick="{this.foooooo}">
        {this.props.label}
      </button>
    );
  }
}

export default Button;
