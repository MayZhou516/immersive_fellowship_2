import React from 'react';
import User from './User';

export default ({ users, deleteUser })=> {
  return (
    <ul className='list-group'>
      {
        users.map( user => <User deleteUser={ deleteUser } key={ user.id } user={ user } />) 
      }
    </ul>
  );
};

