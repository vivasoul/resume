import React, { Component } from "react";
import "/src/styles/Layout.css";
import Menu from "Menu";
/*
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
*/
export default class Layout extends Component {

  render() {
    return (
      <div className="body-container">
        <div className="left-body"><Menu/></div>
        <div className="right-body"></div>
      </div>
    );
  }
}
