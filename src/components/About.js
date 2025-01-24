import React from 'react';
import Links from './Links';

function About() {
  // Define links object with default values
  const links = {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername'
  };

  return (
    <div>
      <h1>About Me</h1>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;