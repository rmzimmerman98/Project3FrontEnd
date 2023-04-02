import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Brewery from "./components/Brewery";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Filter from "./components/Filter";
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, {FullscreenControl, GeolocateControl, Marker, NavigationControl} from "react-map-gl"; 


const App = () => {
  // State Variables
  const [breweries, setBreweries] = useState([]);
  const [hideBreweries, setHideBreweries]= useState(false)
  const [hideImage, setHideImage] = useState(true)
 
  const [hideEdit, setHideEdit] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);

  const [lng, setLng] = useState(-103.41493817027313)
  const [lat, setLat] = useState(20.704031522322648)

  
//-----------------------------------
//              NEW BREWERY
//-----------------------------------
  const getBreweries = () => {
    axios.get("https://api.openbrewerydb.org/v1/breweries").then((response) => {
        setBreweries(response.data);
      })
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
  axios.delete("http://localhost:3000/breweries/" + deletedBrewery._id).then((response) => {
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
  axios.put(`http://localhost:3000/breweries/` + data._id, data).then((response) => {
    let newBreweries = breweries.map((brewery) => {
      return brewery._id !== data._id ? brewery : data
    })
    setBreweries(newBreweries)
  })
}



//-----------------------------------
//          CONDITIONAL RENDERING
//-----------------------------------
  const showBreweries = () => {
    setHideBreweries(true)
    setHideImage(false)
    setHideEdit(false)
  }
  const home = () => {
    setHideBreweries(false)
    setHideImage(true)
    setHideEdit(false)
  }
  const add = () => {
    setHideBreweries(false)
    setHideImage(false)
    setHideEdit(false)
  }
  const showEdit = () => {
    setHideBreweries(false)
    setHideImage(false)
    setHideEdit(true)
  }

//-----------------------------------
//          Pagination
//-----------------------------------
  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }

  function handlePrevPage() {
    setCurrentPage(currentPage - 1);
  }
  
  useEffect(() => {
    const resultsPerPage = 50;
    const url = `https://api.openbrewerydb.org/v1/breweries?page=${currentPage}&per_page=${resultsPerPage}`;

    axios.get(url)
      .then(response => {
        setBreweries(response.data);
      })
      .catch(error => {
        console.error('Error fetching breweries:', error);
      });
  }, [currentPage]);


  useEffect(() => {
    const page_number = 1;
    const results_per_page = 72;
    const url = `https://api.openbrewerydb.org/v1/breweries?page=${page_number}&per_page=${results_per_page}`;
  
    axios.get(url)
      .then(response => {
        setBreweries(response.data);
      })
      .catch(error => {
        console.error('Error fetching breweries:', error);
      });
  }, []);


  return (
    <div id="app">
{/* NAV BAR SECTION */}
      <nav id="nav">
        <img id="logo" src="/logo.png" alt="" />
        <ul id="navUl">
          <li onClick={add}><Add handleCreate={handleCreate}/></li>
          <li id="navItem" onClick={home}><a href="#">Home</a></li>
          <li id="navItem"><a href="#about">About</a></li>
          <li id="navItem" onClick={showBreweries}>Breweries</li>
          <li id="navItem"><a href="#contact">Contact</a></li>
        </ul>
        <div className="pagination">
        <button id="editBtn" disabled={currentPage === 1} onClick={handlePrevPage}>Previous</button>
        <button id="editBtn" disabled={breweries.length < 50} onClick={handleNextPage}>Next</button>
      </div>
      </nav>
{/* BREWERIES CONDITIONAL RENDERING SECTION */}
      <div id="display">
        {breweries.map((brewery) => {
          return (
              hideBreweries
              ? <>      
                  <div id="newCard">
                    <Brewery brewery={brewery} />
                    <div id="buttons">
                      <Edit brewery={brewery} handleEdit={handleEdit} />
                      <button id="editBtn" onClick={() => {handleDelete(brewery)}}>Remove</button>
                    </div>
                  </div>
                  
                </>
              : <></>
          );
        })}
      </div>
{/* HOME PAGE SECTION */}
      <div className="displayImage"> 
              {hideImage 
              ? 
              <div>
                <img id="homeImage" src="logo.png"/>
                <Filter/>

{/* MAPBOX SECTION */}
<div id='map'>

<Map
mapboxAccessToken='pk.eyJ1IjoieW91c3NlZnNoYWJvIiwiYSI6ImNsZnlsOW14cjBiczkzcm9odWJmemN0ejEifQ.lju6vjKv3aiPNv-IvLNKYw'
style={{  
  width: "70%",
  height: "500px",
  borderRadius: "20px",
  marginLeft: "15%",
  marginTop: "5%"
}}
initialViewState={{
  longitude: lng,
  latitude: lat,
}}
mapStyle="mapbox://styles/youssefshabo/clfymf6eb000101l1xl5w0szn/draft"
>
<Marker
longitude={lng}
latitude={lat}
/>
<NavigationControl/>
<GeolocateControl/>
<FullscreenControl/>
</Map>
</div>


{/* ABOUT SECTION */}
              <div id="about">
                <h1 id="aboutTitle">ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim leo, tempor non vestibulum non, placerat sed sem. Curabitur sit amet turpis vitae urna faucibus convallis. Nullam eget diam ex. Suspendisse cursus varius felis id vestibulum. Mauris euismod maximus nunc, at eleifend ipsum feugiat vel. Nullam nec nibh pretium, aliquam urna sed, tincidunt metus. Donec vehicula non nulla accumsan porttitor. Maecenas ultricies, mauris nec tristique efficitur, enim nulla porttitor sem, eget cursus turpis eros sed sapien. Donec volutpat quam turpis, id eleifend risus gravida imperdiet. Aliquam tempus ipsum a enim egestas ultricies.</p>
                <p>Phasellus viverra erat nec convallis dapibus. Proin iaculis augue id mauris tempus imperdiet. Cras orci risus, fermentum vitae tincidunt vitae, facilisis in tortor. Suspendisse dictum malesuada elit, vel rhoncus enim lacinia et. Nam blandit aliquet velit. Maecenas tristique tempor est eget faucibus. Suspendisse a pharetra est. Ut elementum velit vitae pulvinar aliquet.</p>
              </div>
              </div>
              : "" }   
      </div>
{/* FOOTER SECTION */}
      <footer>
        <div >
          <h2 id="contact">CONTACT</h2>
          <dev id="footer">
            <div id="col">
              <h3>RaYo Barrels Brewery Library</h3>
              <p>1105 Claire ave,</p>
              <p>Austin, TX 78703</p>
            </div>
            <div id="col">
              <p>T: 512-961-6519</p>
              <p>F: 866-272-5060</p>
              <p>Email: rayobarrels@email.com</p>
            </div>
            <div id="col">
              <p>Subscribe to our Newsletter</p>
              <form>
                <input type="input" placeholder="Enter your email here" />
                <input type="submit" />
              </form>
            </div>
          </dev>
          <p id="footer">Youssef Shabo | Randall Zimmereman © 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
