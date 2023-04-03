<<<<<<< HEAD
const Brewery = (props) => {
=======


const Brewery = (props) => {
  console.log(props.brewery);
>>>>>>> 951ff0cd6ef8ceb9866318ac5c5d422477575312
  return (
    <div>
      <div id="cardLayout">
        <div id="name">
          <div id="nameText">
<<<<<<< HEAD
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
=======
            <h3>{props.brewery.name}</h3>
          </div>
        </div>
        <div id="info">
          <h5>Type: {props.brewery.brewery_type}</h5>
            <hr />
          <h5>{props.brewery.street}</h5>
            <hr />
          <h5>{props.brewery.city}, {props.brewery.state}</h5>
          <h5>{props.brewery.country}</h5>
            <hr/>
          <div id="website">
            <a href={props.brewery.website_url}>
              {props.brewery.website_url && props.brewery.website_url.replace(/^https?:\/\//i, "")}
            </a>
          </div>
>>>>>>> 951ff0cd6ef8ceb9866318ac5c5d422477575312
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Brewery;
=======
export default Brewery;
 
>>>>>>> 951ff0cd6ef8ceb9866318ac5c5d422477575312
