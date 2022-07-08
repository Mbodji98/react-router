import React from 'react';
import './NotFound.css';
import {useNavigate} from 'react-router-dom';

function NotFound() {

  const navigate = useNavigate()

  const goHome = () => {
    navigate("/");
  }

  return (
    <div>
      <h1>Wops, Cette page n'existe pas !!!</h1>
      <button onClick={goHome}>Retourner à la page d'accueil</button>
    </div>
  )
}

export default NotFound