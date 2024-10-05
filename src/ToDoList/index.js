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

  componentDidMount() {
    const storedTasks = localStorage.getItem("taskList");

    if (storedTasks) {
      this.setState({ taskList: JSON.parse(storedTasks) });
    }
  };

  componentDidUpdate() {
    const savedTasks = JSON.stringify(this.state.taskList);

    try {
      localStorage.setItem("taskList", savedTasks);
    } catch (e) {
      if (e.code === "22" || e.code === "1024") {
        alert('Storage quota exceeded! Please delete tasks or click the "Clear All" button.');
      }
    }
  };

  addTask = (taskName) => {
    const newTask = {
      id: new Date(),
      item: taskName,
    };

    const newTasks = [...this.state.taskList, newTask];
    this.setState({ taskList: newTasks});
  };

  editTask = (id, updatedTask) => {
    // find id of element
    const updatedTasks = this.state.taskList.map((task) => {
      // find id of task
      if (task.id === id && updatedTask !== "") {
        task.item = updatedTask;
        return task;
      }

      return task;
    });

    this.setState({ taskList: updatedTasks });
  };

  deleteTask = (id) => {
    // find id of element and delete task
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
