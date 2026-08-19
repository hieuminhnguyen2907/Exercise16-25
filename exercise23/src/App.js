import React, { Suspense } from 'react';
import { fetchUser, fetchPost } from './api';

const User = React.lazy(() => import('./components/User'));
const Post = React.lazy(() => import('./components/Post'));

const App = () => {
  return (
    <div>
      <h1>Lazy Loading Demo</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <User user={fetchUser(1)} />
        <Post post={fetchPost(1)} />
      </Suspense>
    </div>
  );
};

export default App;
