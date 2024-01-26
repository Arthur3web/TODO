import React, { useState } from 'react';
import User from './User';


const initUsers = [
  {
    id: '123', 
    name: 'Anna', 
    firstname: 'Popova', 
    age: 22,
    isEdit: false
},
  {
    id: '111', 
    name: 'Gena', 
    firstname: 'Bukin', 
    age: 45,
    isEdit: false
},
  {
    id: '222', 
    name: 'Pashka', 
    firstname: 'Kakashka', 
    age: 300,
    isEdit: false
},
];


function Users() {
  const[users, setUsers] = useState(initUsers);

  function changeField(id,field,event) {
    setUsers(users.map(user => {
      if (user.id === id) {
        user[field] = event.target.value;
      }
      return user;
    }));
  }

  const result = users.map(user => {
        return < User 
        key = {user.id}
        id = {user.id}
        isEdit={user.isEdit}
        nameUser = {user.name}
        firstNameUser = {user.firstname}
        ageUser = {user.age}
        changeField={changeField}
    />;
  });

  return <div>
    <table>
      <tbody>
      {result}
      </tbody>
    </table>
  </div>;

}
    
export default Users;