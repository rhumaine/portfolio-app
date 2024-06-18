import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import badgeTwitch from '../../img/Emotes/badgeTwitch.jpg';
import emoteTwitch from '../../img/Emotes/emote_twitch.jpg';
import planningTwitch from '../../img/Emotes/planning.jpg';

const Image = styled.img`
  width: 100%;
  margin-bottom:50px;
  transition: transform 0.3s ease-in-out;

   &:hover {
    transform: scale(1.1);
  }
`;

const StyledHr = styled.hr`
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


const StyledDiv = styled.div`
  width: 50%; 
  margin: 10px auto 30px auto; 
  
  @media (max-width: 768px) { 
    width: 75%; 
  }
`;

const Emotes = () => {
 
    return (
    <div>
        <Header />
        <h2 className='title-section'>Twitch - Discord</h2>
        <StyledDiv>
          <Image src={emoteTwitch} alt="Émotes Twitch - Discord" />
        </StyledDiv>
        
    </div>
  );
};

export default Emotes;