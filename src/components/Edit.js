import React from "react";
import { useState } from "react";
import axios from "axios";

const Edit = (props) => {
  const [brewery, setBrewery] = useState({...props.brewery})

  const handleChange = (event) => {
    setBrewery({...brewery, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleEdit(brewery);
  };

  return (
    <>
    <details>
      <summary id="editBtn">Edit</summary>
        <form id="editForm" onSubmit={handleSubmit}>
        <div id="formField" >
          <label id="line" htmlFor="name">Name:</label>
          <input id="input" type="text" name="name" placeholder={props.brewery.name} onChange={handleChange} value={brewery.name} />
        </div>
        <div id="formField" >
          <label id="line" htmlFor="name">Type:</label>
          <input id="input" type="text" name="brewery_type" placeholder={props.brewery.brewery_type} onChange={handleChange} value={brewery.brewery_type}/>
          </div>
        <div id="formField" >
          <label id="line" htmlFor="name">Street:</label>
          <input id="input" type="text" name="street"placeholder={props.brewery.street}  onChange={handleChange} value={brewery.street}/>
          </div>
        <div id="formField" >
          <label id="line" htmlFor="name">City:</label>
          <input id="input" type="text" name="city" placeholder={props.brewery.city} onChange={handleChange} value={brewery.city}/>
          </div>
        <div id="formField" >
          <label id="line" htmlFor="name">State:</label>
          <input id="input" type="text" name="state" placeholder={props.brewery.state} onChange={handleChange} value={brewery.state}/>
          </div>
        <div id="formField" >
          <label id="line" htmlFor="name">Country:</label>
          <input id="input" type="text" name="country" placeholder={props.brewery.country} onChange={handleChange} value={brewery.country}/>
          </div>
        <div id="formField" >
          <label id="line" htmlFor="name">Web:</label>
          <input id="input" type="url" name="website_url" placeholder={props.brewery.website_url} onChange={handleChange} value={brewery.website_url}/>
          </div>
          <div id="editButtons">
            <input id="editBtn" type="submit"/>
            <button id="editBtn" onClick={() => { props.toggleEdit() }}>Cancel</button>
          </div>
        </form>
        </details>
    </>
  );
};

export default Edit;
