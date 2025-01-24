// src/components/Home.js
import React from 'react';

function Home({ name, city }) {
    return (
        <div>
            <h1>{name} is a Web Developer from {city}</h1>
        </div>
    );
}

export default Home;
