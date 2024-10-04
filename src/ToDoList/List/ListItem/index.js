import React, { useState } from 'react';
import { ReactComponent as EditIcon } from '../../images/edit.svg';
import { ReactComponent as DeleteIcon } from '../../images/trash.svg';

const ListItem = (props) => {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState("");
  const [checked, setChecked] = useState(false);

  const checkThis = () => {
    setChecked(!checked);
  }

  const editThis = (e) => {
    setEditedTask(e.target.value);
  };

  const saveEdit = (e) => {
    e.preventDefault();

    const taskToEditId = props.task.id;
    props.editTask(taskToEditId, editedTask);
    setEditedTask(""); // what about if no changes are made? task should not be blank
    setEditing(false);
  }

  const deleteThis = () => {
    const taskToDeleteId = props.task.id;
    props.deleteTask(taskToDeleteId);
  };

  const viewTemplate = (
    <div className="list-item">
      <input className="is-task-done" type="checkbox" checked={checked} onClick={checkThis} />

      <span className="checkmark"></span>

      <span className="task-content">{ props.task.item }</span>

      <span className="list-option-container">
        <span className="edit-task" onClick={() => setEditing(true)}><EditIcon /></span>

        <span className="delete-task" onClick={deleteThis}><DeleteIcon /></span>
      </span>
    </div>
  );

  const editingTemplate = (
    <form className="editing-template" onSubmit={saveEdit}>
      <p>old task: {props.task.item}</p>

      <input id={props.task.id} className="editing-area" type="text" placeholder={props.task.item} value={editedTask} onChange={editThis} />

      <div className="et-btns">
        <button className="btn edit-cancel" type="button" onClick={() => setEditing(false)}>
          cancel
        </button>
        
        <button className="btn edit-save" type="submit" onClick={() => checkThis}>
          save
        </button>
      </div>
    </form>
  );

  return (
    <label className="checkbox">
      <div>{editing? editingTemplate : viewTemplate}</div>
    </label>
  );
};

export default ListItem;
