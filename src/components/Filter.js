import React from "react";
import { useState, useEffect } from "react";

const Filter = ({breweries}) => {
    // const [breweries, setBreweries] = useState([]);
    const [breweryTypes, setBreweryTypes] = useState([]);
    const [filteredBreweries, setFilteredBreweries] = useState(breweries);
    // const [types, setTypes] = useState(["micro", "brewpub", "large" ]);
    const types = ["micro", "brewpub", "large"] 

//-----------------------------------
//           FILTER BREWERY
//-----------------------------------
const handleFilter = (types) => {
    const filteredBreweries = breweries.filter(brewery => brewery.brewery_type === types).map(filteredBrewery => (filteredBrewery.name));
    setFilteredBreweries(filteredBreweries);
    console.log(filteredBreweries);
  }


    return(
        <>
            <div id="filter">
                <div>
               
                    <button id="breweryType" onClick={() => handleFilter('micro')}><div id="separateImage">
                    <img id="breweryImage" src="micro.png"/>
                    <h3 id="typeText">Micro Breweries</h3>
                    </div></button>
                    <button id="breweryType" onClick={() => handleFilter('brewpub')}><div id="separateImage">
                    <img id="breweryImage" src="regional.png"/>
                    <h3 id="typeText">Brewpub</h3>
                    </div></button>
                    <button id="breweryType" onClick={() => handleFilter('large')}><div id="separateImage">
                    <img id="breweryImage" src="macro.png"/>
                    <h3 id="typeText">Macro Breweries</h3>
                    </div></button>
                    {/* <ul>
                    {filteredBreweries.length > 0 
                    ? (
                        filteredBreweries.map((brewery, index) => (
                        <li key={index}>{brewery}</li>
                        ))
                    ) : (
                        breweries.map((brewery, index) => (
                        <li key={index}>{brewery.name}</li>
                        ))
                    )}
                    </ul> */}
                </div>
            </div>
        </>
    )
}

export default Filter
