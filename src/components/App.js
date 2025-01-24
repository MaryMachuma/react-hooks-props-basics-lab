import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

function App() {
  const user = {
    name: "John Doe",
    bio: "Software Engineer with a passion for building great products.",
    github: "https://github.com/JohnDoe",
    linkedin: "https://linkedin.com/in/JohnDoe",
  };

  return (
    <div>
      <NavBar />
      <Home user={user} />
      <About user={user} />
    </div>
  );
}

export default App;
