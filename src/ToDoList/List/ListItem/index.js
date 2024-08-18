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
    <label className="checkbox">
      <input className="is-task-done" type="checkbox" />
      <span className="checkmark"></span>
      <span className="task-content">{ props.task.item }</span>
      <span className="list-option-container">
        {/*<span className="edit-task" onClick={editThis}>E</span>*/}
        <span className="delete-task" onClick={deleteThis}>X</span>
      </span>
    </label>
  );
};

export default ListItem;
