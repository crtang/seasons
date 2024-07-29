import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
  const renderList = (task) => {
    <ListItem 
      task={task}
      key={task.id}
    />
  };

  const listElements = props.taskList.map(renderList);

  return (
    <ul>
      { listElements }
    </ul>
  );
}

export default List;
