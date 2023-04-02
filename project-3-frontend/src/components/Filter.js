import React from "react";
import { useState, useEffect } from "react";

const Filter = () => {
    const [breweries, setBreweries] = useState([]);
    const [breweryTypes, setBreweryTypes] = useState([]);
    const [filteredBreweries, setFilteredBreweries] = useState(breweries);
    const [types, setTypes] = useState(["micro", "brewpub", "large" ]);

//-----------------------------------
//           FILTER BREWERY
//-----------------------------------
const handleFilter = (type) => {
    const filteredBreweries = breweries.filter(brewery => brewery.brewery_type === type);
    setFilteredBreweries(filteredBreweries);
  }


    return(
        <>
            <div id="test">
                <h1 id="typeText" >Breweries by Size</h1>
                <div>
                    <button id="breweryType" onClick={() => handleFilter('micro')}><div id="separateImage">
                    <img id="breweryImage" src="micro.png"/>
                    <h1 id="typeText">Micro Breweries</h1>
                    </div></button>
                    <button id="breweryType" onClick={() => handleFilter('brewpub')}><div id="separateImage">
                    <img id="breweryImage" src="regional.png"/>
                    <h1 id="typeText">Brewpub</h1>
                    </div></button>
                    <button id="breweryType" onClick={() => handleFilter('large')}><div id="separateImage">
                    <img id="breweryImage" src="macro.png"/>
                    <h1 id="typeText">Macro Breweries</h1>
                    </div></button>
                </div>
            </div>
        </>
    )
}

export default Filter
