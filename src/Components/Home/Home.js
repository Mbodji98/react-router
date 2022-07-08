import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bienvenue sur le site</h1>
      <Link
      to="/contacts"
      state={{fromHone: "Hello Contact"}}
      >
        Contacts
      </Link>
    </div>
  );
}

export default Home;
