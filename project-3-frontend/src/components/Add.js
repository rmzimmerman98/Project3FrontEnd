import { useState } from "react";

const Add = (props) => {
  const [brewery, setBrewery] = useState({ name: "" });

  const handleChange = (event) => {
    setBrewery({ ...brewery, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleCreate(brewery);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label id="line" htmlFor="name">
            Name:
          </label>
          <input type="text" name="name" onChange={handleChange} />
          <br />
          <br />
          <input type="text" name="brewery_type" onChange={handleChange} />
          <br />
          <br />
          <input type="text" name="street" onChange={handleChange} />
          <br />
          <br />
          <input type="text" name="city" onChange={handleChange} />
          <br />
          <br />
          <input type="text" name="state" onChange={handleChange} />
          <br />
          <br />
          <input type="text" name="website_url" onChange={handleChange} />
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Add;
