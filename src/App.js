import React, { useEffect } from 'react';
import ChildComponent from './childComponent';


const App = () => {
  useEffect(() => {
    const handleChildEvent = (event) => {
      const message = event.detail.message;
      alert(message)
      event.preventDefault();
    };
    window.addEventListener(
      'childEvent', handleChildEvent
    );
    // add function to run when custom event (childEvent) will trigger
    return () => {
      window.removeEventListener(
        'childEvent', handleChildEvent
      );
    };
  }, []);

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent/>
    </div>
  );
};

export default App;
