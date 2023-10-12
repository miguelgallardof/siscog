import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { BurgerButton } from './BurgerButton'
//import LogoNegative from '../assets/gales/logo-negative.svg'
import LogoPositive from '../assets/gales/logo-positive.svg'

import styled from 'styled-components'

export const NavBar = () => {
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
          {/* <a className='link' onClick={handleClick} href="/">Home</a>
          <a className='link' onClick={handleClick} href="/About">About</a> */}
          <NavLink to={"/"} >
            <a onClick={handleClick} href="/">Home</a>
          </NavLink>
          <NavLink isActive='true' className='link' onClick={handleClick} to={"/about"}>
            About
          </NavLink>
          <NavLink to={"/*"}>
            Horror
          </NavLink>
        </div>
        <div className='burger'>
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </div>
      </NavContainer>
      <Bg className={`initial ${clicked ? ' active' : ''}`}>
      {/* <h3>Desarrollado por <img src={LogoNegative} alt='gales logo'/></h3> */}
      <h3>Desarrollado por <img src={LogoPositive} alt='gales logo'/></h3>
      </Bg>
      <Content className={`initial ${clicked ? ' active' : ''}`}>
        <h1>Logo</h1>
      </Content>
    </>
  )
}

const NavContainer = styled.nav`
  padding: 1rem 1.5rem;
  margin: 1rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
  /* opacity: 0.85; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  h2{
    color: var(--main-color);
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  a{
    color: cyan;
    text-decoration: none;
    margin-left: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .75s ease;
    z-index: 2;
    a{ //Cuando salen
      color: red;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: var(--main-color);
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
      color: yellow;
    }
  }
  .burger{
    z-index: 2;
    @media(min-width: 768px){
      display: none;
    }
  }
`

const Bg = styled.div`
  background-color: var(--shadow-color);
  opacity: 0.5;
  position: absolute;
  left: -1000px;
  z-index: 1;
  transition: all .25s ease ;
  
  &.active{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  h3 {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
    padding: 1rem;
    color: white;
    opacity: 0.25;
  }
`
const Content = styled.div`
  background-color: var(--second-color);
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all .75s ease ;
  
  &.active{
    border-radius: 0 0 100% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`