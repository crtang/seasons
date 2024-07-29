import React from 'react';
import NewTask from './NewTask';

const ListHeader = (props) => {
  return (
    <div>
      <h2 id="to-do_list_title">to do list</h2>
      <NewTask />
    </div>
  );
};

export default ListHeader;
