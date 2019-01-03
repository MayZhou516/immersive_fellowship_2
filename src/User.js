import React from 'react';

export default ({ user, deleteUser })=> {
  return (
    <li className='list-group-item'>
      { user.name }
      <button className='btn btn-danger' onClick={ ()=>  deleteUser(user.id)} style={{ float: 'right' }}>x</button>
    </li>
  );
};

