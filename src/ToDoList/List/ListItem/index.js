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
      <label class="task">
        <input class="is-task-done" type="checkbox" />
        <span class="checkmark">{ props.task.item }</span>
        <span class="task-content"></span>
        <span class="edit-task" onClick={editThis}></span>
        <span class="delete-task" onClick={deleteThis}></span>
      </label>
    </li>
  );
};

export default ListItem;
