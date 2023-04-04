import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Brewery from "./components/Brewery";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Filter from "./components/Filter";
import Map from './components/Map';



const App = () => {
  // State Variables
  const [breweries, setBreweries] = useState([]);
  const [hideBreweries, setHideBreweries]= useState(false)
  const [hideImage, setHideImage] = useState(true)
  const [hideEdit, setHideEdit] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);



  
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
    const results_per_page = 48;
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
       
      </nav>
{/* BREWERIES CONDITIONAL RENDERING SECTION */}
      <div id="display">
        {hideBreweries
              ?
              <div id='breweryDispaly'>
{/* MAPBOX SECTION */}
              <Map breweries={breweries} />
              <div id='sidebar'>

{/* PAGINATION SECTION */}
              <div className="pagination">
                <button id="nxtBtn" disabled={currentPage === 1} onClick={handlePrevPage}>Previous</button>
                <button id="nxtBtn"  onClick={handleNextPage}>Next</button>
              </div>
{/* CARDS SECTION */}   
              <div id='test'>    
              {breweries.map((brewery) => {
                return (
                    <>    
                        <div id="newCard">
                          <Brewery brewery={brewery} />
                          <Edit brewery={brewery} handleEdit={handleEdit} />
                        </div>
                    </>)})}
              </div>
              </div>
              </div>: <></>
          }
      </div>
{/* HOME PAGE SECTION */}
      <div className="displayImage"> 
              {hideImage 
              ? 
              <div>
                <img id="homeImage" src="logo.png"/>
 {/* FILTER SECTION */}
              <Filter breweries={breweries}/>
{/* ABOUT SECTION */}
              <div id="about">
                <h1 id="aboutTitle">ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim leo, tempor non vestibulum non, placerat sed sem. Curabitur sit amet turpis vitae urna faucibus convallis. Nullam eget diam ex. Suspendisse cursus varius felis id vestibulum. Mauris euismod maximus nunc, at eleifend ipsum feugiat vel. Nullam nec nibh pretium, aliquam urna sed, tincidunt metus. Donec vehicula non nulla accumsan porttitor. Maecenas ultricies, mauris nec tristique efficitur, enim nulla porttitor sem, eget cursus turpis eros sed sapien. Donec volutpat quam turpis, id eleifend risus gravida imperdiet. Aliquam tempus ipsum a enim egestas ultricies.</p>
                <p>Phasellus viverra erat nec convallis dapibus. Proin iaculis augue id mauris tempus imperdiet. Cras orci risus, fermentum vitae tincidunt vitae, facilisis in tortor. Suspendisse dictum malesuada elit, vel rhoncus enim lacinia et. Nam blandit aliquet velit. Maecenas tristique tempor est eget faucibus. Suspendisse a pharetra est. Ut elementum velit vitae pulvinar aliquet.</p>
              </div>
              </div>
              : "" }   
      </div>
                          {/* MAPBOX SECTION */}
                          {/* <Map breweries={breweries} />   */}
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
