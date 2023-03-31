<<<<<<< HEAD
const Brewery = (props) => {
  return (
    <div>
      <div id="cardLayout">
        <div id="name">
          <div id="nameText">
            <h1>{props.brewery.name}</h1>
          </div>
        </div>
        <div id="info">
          <h4>Type: {props.brewery.brewery_type}</h4>
          <hr />
          <h4>{props.brewery.street}</h4>
          <hr />
          <h4>
            {props.brewery.city}, {props.brewery.state}
          </h4>
          <h4>{props.brewery.country}</h4>
          <hr />
          <a id="website" href={props.brewery.website_url}>{props.brewery.website_url && props.brewery.website_url.replace(/^https?:\/\//i, '')}</a>
        </div>
      </div>
    </div>
=======
import Edit from "./Edit";
import axios from "axios";
import { useState } from "react";
const Brewery = (props) => {

  return (

      <div id="cardLayout">
        <div id="name">
          <div id="nameText">
          <h2>{props.brewery.name}</h2>
          </div>
        </div>
        <div id="info">
          <p>Type: {props.brewery.brewery_type}</p><hr/>
          <p>{props.brewery.city}, {props.brewery.state}</p><hr/>
          <a id="website" href={props.brewery.website_url}>{props.brewery.website_url && props.brewery.website_url.replace(/^https?:\/\//i, '')}</a>
        </div>
      </div>

>>>>>>> a860c19efb5d5a4ff008d6d73d4d1d5f4d320f26
  );
};

export default Brewery;
