import React from "react";

function Home({ user }) {
  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>This is your portfolio site.</p>
    </div>
  );
}

export default Home;
