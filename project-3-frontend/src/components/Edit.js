import { useState } from "react";

const Edit = (props) => {
  const [brewery, setBrewery] = useState({ ...props.brewery });

  const handleChange = (event) => {
    setBrewery({ ...brewery, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleEdit(brewery);
  };

  return (
    <>
      <details>
        <summary>Edit Brewery</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" onChange={handleChange} value={brewery.name}/>
          <br />
          <br />
          <label htmlFor="name">Brewery Type:</label>
          <input type="text" name="brewery_type" onChange={handleChange} value={brewery.brewery_type}/>
          <br />
          <br />
          <label htmlFor="name">Street:</label>
          <input type="text" name="street" onChange={handleChange} value={brewery.street}/>
          <br />
          <br />
          <label htmlFor="name">City:</label>
          <input type="text" name="city" onChange={handleChange} value={brewery.city}/>
          <br />
          <br />
          <label htmlFor="name">State:</label>
          <input type="text" name="state" onChange={handleChange} value={brewery.state}/>
          <br />
          <br />
          <label htmlFor="name">Web:</label>
          <input type="text" name="website_url" onChange={handleChange} value={brewery.website_url}/>
          <br />
          <br />
          <input type="submit" />
        </form>
      </details>
    </>
  );
};

export default Edit;
