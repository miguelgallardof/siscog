import React from "react"; 
import GalesPositive from '../assets/gales/logo-positive.svg';

import styled from "styled-components";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <footer>
        <p>
        Copyright &copy; {year} <span>SISCOG</span></p> <p>Hecho con ❤️ por <a href='https://gales.pe' rel='noreferrer' target='_blank'><img src={GalesPositive} alt='gales.pe' /></a></p>
      </footer>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background: var(--dark-color);

  justify-content: space-between;
  
  
  p{
    color: var(--white-color)
  }
  img {
    height: 1.25rem;
    bottom: 10rem;
  }
`