import React from 'react';
import { useParams, Link } from 'react-router-dom';

function UserDetail({ users }) {
  const { userId } = useParams();
  const user = users.find(u => u.id === parseInt(userId));

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div>
      <h3>User Details</h3>
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <Link to="/users">Back to Users</Link>
    </div>
  );
}

export default UserDetail;