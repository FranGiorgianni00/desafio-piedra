 import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Bienvenido a Piedra, Papel o Tijera</h1>
      <Link to="/game">
        <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Jugar
        </button>
      </Link>
    </div>
  );
};

export default Home;
