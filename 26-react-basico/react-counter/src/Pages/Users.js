import { useEffect, useState } from 'react';

import './Users.css';

const Users = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading === true ? <div class='loading'>Loading&#8230;</div> : ''}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>
                <strong>{user.name}</strong>
              </td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
