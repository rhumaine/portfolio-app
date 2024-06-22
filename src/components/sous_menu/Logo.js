import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import logo from '../../img/logoBannieres/logos.jpg';

const Image = styled.img`
  width: 100%;
  margin-bottom:50px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

/*const StyledHr = styled.hr`
  width:50%;
  margin:80px auto;
  border:none;
  opacity:0.8;

  &::before {
    content: '';
    display: block;
    width: 100%;
    border-top: dotted 5px #320F13;
    height: 4px;
  }
`;
*/

const StyledDiv = styled.div`
  width: 50%; 
  margin: 10px auto 30px auto; 
  
  @media (max-width: 768px) { 
    width: 75%; 
  }
`;

const Logo = () => {
 
    return (
    <div>
        <Header />
        <h2 className='title-section'>Logos</h2>
        <StyledDiv>
          <Image src={logo} alt="Logos" />
        </StyledDiv>
    </div>
  );
};

export default Logo;