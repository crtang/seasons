import React, { Component } from 'react';
import './index.css';
import ListHeader from './ListHeader';
import List from './List';

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: [ { } ],
    };

    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  };

  addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      item: taskName,
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
  };

  deleteTask = (id) => {
    // find id of element
    // delete task
    const updatedTasks = this.state.taskList.map((task) => {
      if (task.id !== id) {
        return task;
      } else {
        return { ...this.state.taskList };
      }
    });
    
    this.setState({ taskList: updatedTasks });
  };



  render() {
    return (
      <div>
        <ListHeader addTask={this.addTask} />
        <List taskList={this.state.taskList} editTask={this.editTask} deleteTask={this.deleteTask} />
      </div>
    )
  }
};

export default ToDoList;
