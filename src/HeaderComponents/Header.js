import React from 'react'
import Cart from './Cart'
import '../HeaderComponents/Header.css'
import { Link } from 'react-router-dom'
function MainLogo({logo}){
    return(
        <>
        <h1 className='main_logo'>{logo}🎮</h1>
        </>
    )
}

function SearchBar(){
    return(
        <>
        <form action="#">
            <input className='text_bar' type="text" />
            <button className='search' type='submit'>🔍</button>
        </form>
        </>
    )
}

const Header = () => {
  return (
    <>
    <div className="header_component">
      <Link to="/" style={{textDecoration:"none"}}>
        <MainLogo logo="GAME_GARE" />
      </Link>
      <SearchBar />
      <Link to="/checkout" style={{textDecoration:"none"}}>
        <Cart />
      </Link>
    </div>
    </>
  );
}

export default Header