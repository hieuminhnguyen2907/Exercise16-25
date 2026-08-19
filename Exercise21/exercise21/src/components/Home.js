import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <nav>
      <Link to="/users">Users</Link> |{" "}
      <Link to="/dishes">Dishes</Link>
    </nav>
  );
}

export default Home;