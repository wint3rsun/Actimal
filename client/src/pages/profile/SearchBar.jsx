import React, { useState,useEffect } from "react";
import "./SearchBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUserClock, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.username.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const add = (e,value) => {
    console.log("user cliked",value.value);

  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 3).map((value, key) => {
            return (
              <a key ={value.id} className="dataItem" onClick={e => add(e,{value})} >
                <p>{value.username} <FontAwesomeIcon className="add_i" icon={faUserPlus}/></p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;