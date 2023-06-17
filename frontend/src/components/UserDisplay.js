// UserDisplay.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDisplay = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then((response) => {
        // Handle success
        setUsers(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Registered Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            {/* Add more table headers for other user properties */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
              {/* Add more table cells for other user properties */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDisplay;
