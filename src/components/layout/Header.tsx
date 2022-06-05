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
      <h1>
        <strong>Mega</strong> Ogłoszenia
      </h1>
      <Btn to ="/add" text="Dodaj ogłoszenie"/>
      <form className="search" onSubmit={setSearchFromLocalState}>
        <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/><Btn text="Szukaj"/>
      </form>
    </header>
  )
}


