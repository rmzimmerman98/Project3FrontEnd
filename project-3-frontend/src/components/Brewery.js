const Brewery = (props) => {
  return (
    <>
      <div id="cardLayout">
        <div id="name">
          <h1>{props.brewery.name}</h1>
          <h3>{props.brewery.brewery_type}</h3>
          <h3>{props.brewery.street}</h3>
          <h3>{props.brewery.city}</h3>
          <h3>{props.brewery.state}</h3>
          <h3>{props.brewery.website_url}</h3>
        </div>
      </div>
    </>
  );
};

export default Brewery;
