import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ApiService from './service/ApiService';
interface userType {
  id?: string;
  name?: string;
  mobile?: string;
  email?: string;
}

function App() {
  const [userDetails, setUserDetails] = useState <userType>({});

  const GetUser = () => {
    ApiService.get('http://localhost:5000/userdetails')
      .then(res => {
        setUserDetails(res.data.user);
      })
  };

  const AddUser = () => {
    ApiService.post('http://localhost:5000/adduser')
      .then(res => {
        setUserDetails(res.data.user);
      })
  };

  const UpdateUser = () => {
    ApiService.put('http://localhost:5000/updateuser')
      .then(res => {
         setUserDetails(res.data.user);
      })
  };

  const DeleteUser = () => {
    ApiService.patch('http://localhost:5000/deleteuser')
      .then(res => {
         setUserDetails(res.data.user);
      })
  };

  return (
    <div className="App">
      <header >
        <img src={logo} className="App-logo" alt="logo" />
        <table>
        <tbody>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
        </tr>
          <tr>
            <td>{userDetails.id}</td>
            <td>{userDetails.name}</td>
            <td>{userDetails.email}</td>
            <td>{userDetails.mobile}</td>
          </tr>
      </tbody>
      </table>
      </header>
      <button name="GetUser" onClick={() => GetUser()}>Get User</button>
      <button name="AddUser" onClick={() => AddUser()}>Add User</button>
      <button name="UpdateUser" onClick={() => UpdateUser()}>Update User</button>
      <button name="DeleteUser" onClick={() => DeleteUser()}>Delete User</button>
    </div>
  );
}

export default App;
