import React, { useEffect, useState } from 'react';

import RootRouter from './router/RootRouter';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // ENV VARIABLES
    // console.log(import.meta.env.VITE_SOME_KEY); // 123
    // console.log(import.meta.env.DB_PASSWORD); // undefined
    // console.log(import.meta.env.VITE_MY_CUSTOM_VAR); // undefined
  }, []);

  return (
    <div className="App">
     <RootRouter />
    </div>
  );
}

export default App;
