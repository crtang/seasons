import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
  const renderList = (task) =>
    <ListItem 
      task={task}
      key={task.id}
      editTask={props.editTask}
      deleteTask={props.deleteTask}
    />
  ;

  const listElements = props.taskList.map(renderList);

  return (
    <ul>
      { listElements }
    </ul>
  );
}

export default List;
