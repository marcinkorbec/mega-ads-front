import React, {SyntheticEvent, useContext, useState} from "react";
import './Header.css'
import {Btn} from "../common/Btn";
import {SearchContext} from "../../contexts/search.context";


export const Header = () => {
  const [inputVal, setInputVal] = useState('');
  const {search, setSearch} = useContext(SearchContext);

  const setSearchFromLocalState = (e: SyntheticEvent)=> {
    e.preventDefault();
    setSearch(inputVal);
  }

  return (
    <header>
      <div>
        <h1>
          <a href="/" ><strong>Mega</strong> Ogłoszenia</a>
        </h1>
        <Btn to="/add" text="Dodaj ogłoszenie"/>
        <form className="search topnav" onSubmit={setSearchFromLocalState}>
          <input className="topnav" type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/><Btn text="Szukaj"/>
        </form>
      </div>
    </header>
  )
}


