import React from 'react';

const NewTask = (props) => {
  return (
    <div>
      <input type="text" placeholder="e.g. buy groceries" /> <button onClick={props.addTask}></button>
    </div>
  );
};

export default NewTask;
