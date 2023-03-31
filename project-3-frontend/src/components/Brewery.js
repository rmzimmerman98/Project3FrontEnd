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

  );
};

export default Brewery;
