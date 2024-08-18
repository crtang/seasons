import React, { Component } from 'react';
import ListHeader from './ListHeader';
import List from './List';

class ToDoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: [ ],
    };

    this.addTask = this.addTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  };

  addTask = (taskName) => {
    const newTask = {
      id: new Date(),
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
    const updatedTasks = this.state.taskList.filter((task) => task.id !== id);
    
    this.setState({ taskList: updatedTasks });
  };



  render() {
    return (
      <article id="to-do_list">
        <ListHeader addTask={this.addTask} />
        <List taskList={this.state.taskList} editTask={this.editTask} deleteTask={this.deleteTask} />
      </article>
    )
  }
};

export default ToDoList;
