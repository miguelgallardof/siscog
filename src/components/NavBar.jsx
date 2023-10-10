import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import BurgerButton from './BurgerButton'

import styled from 'styled-components'

export default function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <h2>Navbar <span>Responsive</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="/">Home</a>
          <a onClick={handleClick} href="/About">About</a>
          
          {/* <NavLink to={"/"} className={""}>
            <a href='javascript:void(0);'>Home</a>
          </NavLink>
          <NavLink to={"/about"}>
            About
          </NavLink>
          <NavLink to={"/*"}>
            Horror
          </NavLink> */}
        </div>
        <div className='burger'>
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

const NavContainer = styled.nav`
  h2{
    color: black;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: 0.5rem;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: green;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: yellow;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: red;
    }
  }
  .burger{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`