import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Brewery from "./components/Brewery";
import Add from "./components/Add";
import Edit from "./components/Edit";

const App = () => {
  // State Variables
  const [breweries, setBreweries] = useState([]);
  //-----------------------------------
  //              NEW BREWERY
  //-----------------------------------
  const getBrewery = () => {
    axios.get("https://api.openbrewerydb.org/v1/breweries").then((response) => {
        setBreweries(response.data),
        (err) => console.log(err)
      })
      .catch((error) => console.log(error));
  };
  const handleCreate = (data) => {
    axios.post("http://localhost:3000/breweries", data).then((response) => {
      console.log(response);
      let newBreweries = [...breweries, response.data];
      setBreweries(newBreweries);
    });
  };
  //-----------------------------------
  //              DELETE BREWERY
  //-----------------------------------

  const handleDelete = (deletedBrewery) => {
    axios
      .delete("http://localhost:3000/breweries/" + deletedBrewery._id)
      .then((response) => {
        let newBreweries = breweries.filter((brewery) => {
          return brewery._id !== deletedBrewery._id;
        });

        setBreweries(newBreweries);
      });
  };
  //-----------------------------------
  //              UPDATE BREWERY
  //-----------------------------------
  const handleEdit = (data) => {
    axios
      .put("http://localhost:3000/breweries/" + data._id, data)
      .then((response) => {
        console.log(response);
        let newBreweries = breweries.map((brewery) => {
          return brewery._id !== data._id ? brewery : data;
        });
        setBreweries(newBreweries);
      });
  };
  useEffect(() => {
    getBrewery();
  }, []);
  return (
    <>
      <nav id="nav">
        <img id="logo" src="/.png" alt="" />
        <ul id="navUl">
          <li id="navItem">Home</li>
          <li id="navItem">About</li>
          <li id="navItem">Breweries</li>
          <li id="navItem">Contact</li>
        </ul>
      </nav>
      <Add handleCreate={handleCreate} />
      <div id="display">
        {breweries.map((brewery) => {
          return (
            <>
              <div id="newCard">
                <Brewery brewery={brewery} />
                <div id="buttons">
                  <Edit brewery={brewery} handleEdit={handleEdit} />
                  <button
                    onClick={() => {
                      handleDelete(brewery);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <footer>
        <h1 id="contact">Contact</h1>
        <div id="footer">
          <div id="col">
            <p>BREWERY</p>
            <p>1156 West Cesar Chavez</p>
            <p>Austin, TX 78703</p>
          </div>
          <div id="col">
            <p>T: 512-961-6519</p>
            <p>F: 866-272-5060</p>
            <p>Email: austinpetsalive@email.com</p>
          </div>
          <div id="col">
            <p>Subscribe to our Newsletter</p>
            <form>
              <input type="input" placeholder="Enter your email here" />
              <input type="submit" />
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
