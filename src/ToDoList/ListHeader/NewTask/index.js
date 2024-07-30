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
    <form onSubmit={addNewTask}>
      <input
        id="enter-task" 
        type="text" 
        placeholder="e.g. buy groceries" 
        value={taskName}
        onChange={changeTask} 
      />
      <button type="submit">
        add
      </button>
    </form>
  );
};

export default NewTask;
