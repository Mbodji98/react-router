import React from "react";
import "./Profile.css";
import { useParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Bienvenue Sur votre profile</h1>
      <p>{params.id}</p>
    </div>
  );
}

export default Profile;
