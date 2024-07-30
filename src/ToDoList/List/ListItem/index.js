import React from 'react';

const ListItem = (props) => {
  const editThis = () => {
    const taskToEditId = props.task.id;
    props.editTask(taskToEditId);
  };

  const deleteThis = () => {
    const taskToDeleteId = props.task.id;
    props.deleteTask(taskToDeleteId);
  };

  return (
    <li>
      <label className="task">
        <input className="is-task-done" type="checkbox" />
        <span className="checkmark"></span>
        <span className="task-content">{ props.task.item }</span>
        <span className="edit-task" onClick={editThis}></span>
        <span className="delete-task" onClick={deleteThis}></span>
      </label>
    </li>
  );
};

export default ListItem;
