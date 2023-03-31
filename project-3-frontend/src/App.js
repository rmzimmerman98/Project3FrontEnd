import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Brewery from "./components/Brewery";
import Add from "./components/Add";
import Edit from "./components/Edit";

const App = () => {
  // State Variables
  const [breweries, setBreweries] = useState([]);
  const [hideBreweries, setHideBreweries]= useState(false)
  const [hideImage, setHideImage] = useState(true)
  const [breweryTypes, setBreweryTypes] = useState([]);
  const [filteredBreweries, setFilteredBreweries] = useState(breweries);
  const [types, setTypes] = useState(["micro", "brewpub", "large" ]);
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
//-----------------------------------
//           FILTER BREWERY
//-----------------------------------
const handleFilter = (type) => {
  const filteredBreweries = breweries.filter(brewery => brewery.brewery_type === type);
  setFilteredBreweries(filteredBreweries);
}

  return (
    <>
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
        <button disabled={currentPage === 1} onClick={handlePrevPage}>Previous</button>
        <button disabled={breweries.length < 50} onClick={handleNextPage}>Next</button>
      </div>
      </nav>
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
      <div class="displayImage"> 
              {hideImage 
              ? 
              <div>
                <img id="homeImage" src="logo.png"/>
                <div id="test">
                <h1 id="typeText" >Breweries by Size</h1>
                <div>
                  <button id="breweryType" onClick={() => handleFilter('micro')}><div id="separateImage">
                    <img id="breweryImage" src="micro.png"/>
                    <h1 id="typeText">Mirco Breweries</h1>
                  </div></button>
                  <button id="breweryType" onClick={() => handleFilter('brewpub')}><div id="separateImage">
                    <img id="breweryImage" src="regional.png"/>
                    <h1 id="typeText">Brewpub</h1>
                  </div></button>
                  <button id="breweryType" onClick={() => handleFilter('large')}><div id="separateImage">
                    <img id="breweryImage" src="macro.png"/>
                    <h1 id="typeText">Marco Breweries</h1>
                  </div></button>
                </div>
                </div>

                {/* Just the images of the three types of Breweries */}
                {/* <div id="typeImage">
                  <div id="separateImage">
                    <img id="breweryImage" src="micro.png"/>
                    <h1 id="typeText">Mirco Breweries</h1>
                  </div>
                  <div id="separateImage">
                    <img id="breweryImage" src="regional.png"/>
                    <h1 id="typeText">Regional Breweries</h1>
                  </div>
                  <div id="separateImage">
                    <img id="breweryImage" src="macro.png"/>
                    <h1 id="typeText">Marco Breweries</h1>
                  </div>
                </div> */}
              <div id="about">
                <h1 id="aboutTitle">About US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim leo, tempor non vestibulum non, placerat sed sem. Curabitur sit amet turpis vitae urna faucibus convallis. Nullam eget diam ex. Suspendisse cursus varius felis id vestibulum. Mauris euismod maximus nunc, at eleifend ipsum feugiat vel. Nullam nec nibh pretium, aliquam urna sed, tincidunt metus. Donec vehicula non nulla accumsan porttitor. Maecenas ultricies, mauris nec tristique efficitur, enim nulla porttitor sem, eget cursus turpis eros sed sapien. Donec volutpat quam turpis, id eleifend risus gravida imperdiet. Aliquam tempus ipsum a enim egestas ultricies.</p>
                <p>Phasellus viverra erat nec convallis dapibus. Proin iaculis augue id mauris tempus imperdiet. Cras orci risus, fermentum vitae tincidunt vitae, facilisis in tortor. Suspendisse dictum malesuada elit, vel rhoncus enim lacinia et. Nam blandit aliquet velit. Maecenas tristique tempor est eget faucibus. Suspendisse a pharetra est. Ut elementum velit vitae pulvinar aliquet.</p>
              </div>
              </div>
              : "" }   
      </div>
      <footer>
        <div >
          <h1 id="contact">Contact</h1>
          <dev id="footer">
            <div id="col">
              <h5>RaYo Barrels Brewery Library</h5>
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
    </>
  );
};

export default App;
