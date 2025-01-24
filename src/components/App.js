import React from 'react';
import Home from './Home';
import About from './About';
import Links from './Links';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Links 
        github="https://github.com/yourusername" 
        linkedin="https://linkedin.com/in/yourusername" 
      />
    </div>
  );
}

export default App;