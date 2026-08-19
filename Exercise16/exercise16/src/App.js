import React from 'react';
import RenderAndCommitDemo from './components/RenderAndCommitDemo';
import EventHandlingDemo from './components/EventHandlingDemo';
import SnapshotDemo from './components/SnapshotDemo';

function App() {
  return (
    <React.StrictMode>
      <EventHandlingDemo />
      <RenderAndCommitDemo />
      <SnapshotDemo />
    </React.StrictMode>

  );
}

export default App;
