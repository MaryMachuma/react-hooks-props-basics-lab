import React from 'react';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import About from '../components/About';


function App() {
  const user = {
    name: "Joe Smith",
    city: "New York",
    bio: "I'm a web developer based in NYC",
    links: {
      github: "https://github.com/joesmith",
      linkedin: "https://linkedin.com/in/joesmith"
    }
  };

  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} />
      <About 
        bio={user.bio}
        github={user.links.github}
        linkedin={user.links.linkedin}
      />
    </div>
  );
}

export default App;
 