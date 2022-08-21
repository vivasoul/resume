import React, { Component } from "react";
import "/src/styles/Layout.css";
import Menu from "Menu";
import Main from "Main";
/*
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
*/
export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page : ""
    }
    this.updatePage = this.updatePage.bind(this);
  }

  updatePage(page) {
    this.setState({page});
  }

  render() {
    const { page } = this.state;

    return (
      <div className="body-container">
        <div className="left-body"><Menu onMenuClick={this.updatePage}/></div>
        <div className="right-body"><Main page={page}/></div>
      </div>
    );
  }
}
