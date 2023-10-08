"use client";
// components/UserList.js
import React, { useEffect, useState } from "react";
import axios from "../axios"; // Import your Axios configuration

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    debugger;
    // Fetch the list of users from your Spring backend
    // fetch("http://localhost:8080/users/list") // Replace with your backend URL
    //   .then((response) => response.json())
    //   .then((data) => setUsers(data))
    //   .catch((error) => console.error("Error fetching users:", error));

    axios
      .get("/users/list")
      .then((response) => {
        debugger;
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
