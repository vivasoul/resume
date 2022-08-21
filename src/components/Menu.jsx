import React, { Component } from "react";

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { page, onClick } = this.props;
    onClick(page);
  }

  render() {
    const { title } = this.props;

    return <div className="menu-item" onClick={this.handleClick}>{title}</div>
  }
}

export default class Menu extends Component {
  render() {
    const onClick = this.props.onMenuClick;

    return (
      <div className="menu-container">
        <MenuItem page="intro" title="Intro" onClick={onClick}/>
        <MenuItem page="skills" title="Skills" onClick={onClick}/>
        <MenuItem page="studies" title="Studies" onClick={onClick}/>
        <MenuItem page="works" title="Works" onClick={onClick}/>
      </div>
    );
  }
}
