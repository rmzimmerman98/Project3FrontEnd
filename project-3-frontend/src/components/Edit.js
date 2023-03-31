import { useState } from "react";

const Edit = (props) => {
<<<<<<< HEAD
  const [brewery, setBrewery] = useState({...props.brewery})
=======
  const [brewery, setBrewery] = useState({ ...props.brewery });
  const [editForm, setEditForm] = useState(false)
>>>>>>> a860c19efb5d5a4ff008d6d73d4d1d5f4d320f26

  const handleChange = (event) => {
    setBrewery({...brewery, [event.target.name]: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleEdit(brewery);
  };

  const showEdit = () => {
    setEditForm(true)
  }


  return (
    <>
<<<<<<< HEAD
    <details>
      <summary id="editBtn">Edit</summary>
        <form id="editForm" onSubmit={handleSubmit}>
=======
      <details>
        <summary id="editBtn">Edit</summary>
        <form onSubmit={handleSubmit}>
          <div id="editForm">
>>>>>>> a860c19efb5d5a4ff008d6d73d4d1d5f4d320f26
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder={props.brewery.name} onChange={handleChange} value={brewery.name} />
          <br />
          <br />
<<<<<<< HEAD
          <label htmlFor="name">Type:</label>
          <input type="text" name="brewery_type" placeholder={props.brewery.brewery_type} onChange={handleChange} value={brewery.brewery_type}/>
=======
          <label htmlFor="name">Brewery Type:</label>
          <input type="text" name="brewery_type" onChange={handleChange} value={brewery.brewery_type}/>
>>>>>>> a860c19efb5d5a4ff008d6d73d4d1d5f4d320f26
          <br />
          <br />
          <label htmlFor="name">Street:</label>
          <input type="text" name="street"placeholder={props.brewery.street}  onChange={handleChange} value={brewery.street}/>
          <br />
          <br />
          <label htmlFor="name">City:</label>
          <input type="text" name="city" placeholder={props.brewery.city} onChange={handleChange} value={brewery.city}/>
          <br />
          <br />
          <label htmlFor="name">State:</label>
          <input type="text" name="state" placeholder={props.brewery.state} onChange={handleChange} value={brewery.state}/>
          <br />
          <br />
          <label htmlFor="name">Country:</label>
          <input type="text" name="country" placeholder={props.brewery.country} onChange={handleChange} value={brewery.country}/>
          <br />
          <br />
          <label htmlFor="name">Web:</label>
          <input type="url" name="website_url" placeholder={props.brewery.website_url} onChange={handleChange} value={brewery.website_url}/>
          <br />
          <br />
<<<<<<< HEAD
          <div id="editButtons">
            <input id="editBtn" type="submit"/>
            <button id="editBtn" onClick={() => { props.toggleEdit() }}>Cancel</button>
          </div>
        </form>
        </details>
=======
          <input type="submit" />
          </div>
        </form>
      </details>
>>>>>>> a860c19efb5d5a4ff008d6d73d4d1d5f4d320f26
    </>
  );
};

export default Edit;
