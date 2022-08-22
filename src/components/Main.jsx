import React, { Component } from "react";
import Intro from "Intro";
import Skills from "Skills";
import Studies from "Studies";
import Tips from "Tips";
import Works from "Works";

class Hello extends Component {
  render() {
    return (
      <div className="hello-container">
        Hello World!!
      </div>
    );
  }
}

export default class Main extends Component {

  getContent(page) {
    var _page = page || "";

    switch(page) {
        case "intro"  :  return <Intro/>;
        case "skills" :  return <Skills/>;
        case "studies":  return <Studies/>;
        case "works"  :  return <Works/>;
        case "tips"  :  return <Tips/>;
        default       :  return <Hello/>;
    }
  }

  render() {
    const { page } = this.props;

    return this.getContent(page);
  }
}
