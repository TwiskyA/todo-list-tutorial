import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { text, done, onCheck } = this.props;
    return (
      <li className={done ? "checked" : ""} onClick={onCheck}>
        {text}
      </li>
    );
  }
}

export default TodoItem;
