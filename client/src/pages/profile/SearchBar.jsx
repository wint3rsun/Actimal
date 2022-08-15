import React, { useState, useEffect } from "react";
import "./SearchBar.scss";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faUserClock, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function SearchBar({ placeholder, data, user }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [Alert,setAlert]=useState(false);
  const [Info,setInfo]=useState("");

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

  const add = async (e, value) => {
    console.log("user cliked", value.value);
    const info = {
      user_id: user.id,
      username: value.value.username
    }
    console.log(info);
    const Response = await fetch('http://localhost:8080/followers', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    });
    const content = await Response.json();
    console.log("back", content);
    setInfo(content)
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 1000);
  }

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
              <a key={value.id} className="dataItem" onClick={e => add(e, { value })} >
                <p>{value.username} <FontAwesomeIcon className="add_i" icon={faUserPlus} /></p>
              </a>
            );
          })}
        </div>
      )}
       {Alert &&  <div className="alert alert-success mt-5" role="alert">
      Followed {Info} sccessfuly
    </div> }
    </div>
  );
}

export default SearchBar;