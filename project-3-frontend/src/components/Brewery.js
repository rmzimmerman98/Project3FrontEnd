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
          <div id="website">
            <a href={props.brewery.website_url}>{props.brewery.website_url && props.brewery.website_url.replace(/^https?:\/\//i, '')}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brewery;
