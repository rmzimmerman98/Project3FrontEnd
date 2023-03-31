import React from "react";
import { useState } from "react";
import Edit from "./Edit";

const Brewery = (props) => {
  const [edit, setEdit] = useState(false)

  const toggleEdit = () => {
    setEdit(!edit)
  }

  return (
    <div id="newCard">
      {edit 
      ? <Edit 
          toggleEdit={toggleEdit}
          setEdit={setEdit}
          brewery={props.brewery}
          handleDelete={props.handleDelete}
          getBreweries={props.getBreweries}
          />
      :
      <div key={props.brewery._id} id="cardLayout">
        <div id="name">
          <div id="nameText">
          <h1>{props.brewery.name}</h1>
          </div>
        </div>
        <div id="info">
          <h4>Type: {props.brewery.brewery_type}</h4><hr/>
          <h4>{props.brewery.street}</h4><hr/>
          <h4>{props.brewery.city}, {props.brewery.state}</h4><hr/>
          <h6>Website: {props.brewery.website_url}</h6>
          <button id="editBtn" onClick={() => { toggleEdit() }}>EDIT</button>
        </div>
      </div>
        }
    </div>
  );
};

export default Brewery;
