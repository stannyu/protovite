import React, { useEffect, useState } from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import { RootComponent } from './components/root-component/root';

import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(import.meta.env.VITE_SOME_KEY); // 123
    console.log(import.meta.env.DB_PASSWORD); // undefined
    console.log(import.meta.env.VITE_MY_CUSTOM_VAR); // undefined
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <RootComponent />´
    </div>
  );
}

export default App;
