import React from "react";
import TodoItem from "./Item/TodoItem";

class List extends React.Component {
  state = {
    myTodoListData: [
      { id: 1, message: "Cirer mes chaussures" },
      { id: 2, message: "Jouer à des jeux" },
      { id: 3, message: "Faire ma déclaration" },
      { id: 4, message: "Manger un McDO" }
    ]
  };

  handleCheck = id => {
    // TODO on click, if checked, should delete item
    const { myTodoListData } = this.state;
    const todoListUpdated = myTodoListData.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      } else {
        return item;
      }
    });

    this.setState({ myTodoListData: todoListUpdated });
  };

  render() {
    const myTodoListData = this.state.myTodoListData;
    return (
      <ul>
        {myTodoListData.map(item => (
          <TodoItem
            key={item.id}
            text={item.message}
            done={item.checked}
            onCheck={() => this.handleCheck(item.id)}
          />
        ))}
      </ul>
    );
  }
}

export default List;
