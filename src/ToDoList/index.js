import React, { Component } from 'react';
import './index.css';

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: [ { } ],
    };
  };

  addTask = () => {
    const newTask = {
      id: Date.now(),
      item: "New task",
    };

    const newTasks = [...this.state.taskList, newTask];
    this.setState({ taskList: newTasks});
  };

  editTask = (id, updatedValue) => {
    // find id of element
    const updatedTasks = this.state.taskList.map((task) => {
      // find id of task
      if (task.id !== id) {
        return task;
      } else {
        task.item = updatedValue;
        return task;
      }
    });

    this.setState({ taskList: updatedTasks });
  }

  deleteTask = () => {
    // find id of element
    // delete task
    const updatedTasks = this.state.taskList.map((task) => {
      if (task.d !== id) {
        return task;
      } else {
        return { ...this.state.taskList };
      }
    });
    
    this.setState({ taskList: updatedTasks });
  };



  render() {
    return (
      <div></div>
    )
  }
};

export default ToDoList;
