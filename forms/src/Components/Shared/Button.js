import React, { Component } from "react";

export class Button extends Component {
  render() {
    return (
      <a href={this.props.whereTo} className={this.props.btnDesign}>
        <img
          src={this.props.img}
          alt={this.props.alt}
          className={this.props.iconDesign}
        />
        {this.props.title}
      </a>
    );
  }
}

export default Button;
