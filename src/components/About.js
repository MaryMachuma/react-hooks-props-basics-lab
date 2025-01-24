import React from "react";
import Links from "./Links";

function About({ user }) {
  return (
    <div>
      <h2>About Me</h2>
      {user.bio && <p>{user.bio}</p>}
      <Links github={user.github} linkedin={user.linkedin} />
    </div>
  );
}

export default About;
