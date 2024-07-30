import React, { useState } from 'react';

function NewTask (props) {
  const [taskName, setTaskName] = useState("");

  function changeTask (e) {
    setTaskName(e.target.value);
  };

  function addNewTask (e) {
    e.preventDefault();
    props.addTask(taskName);
    setTaskName("");
  };

  return (
    <form id="taskbar" onSubmit={addNewTask}>
      <input
        id="enter-task" 
        type="text" 
        placeholder="e.g. buy groceries" 
        value={taskName}
        onChange={changeTask} 
      />
      <button id="add-task" type="submit">
        add
      </button>
    </form>
  );
};

export default NewTask;
