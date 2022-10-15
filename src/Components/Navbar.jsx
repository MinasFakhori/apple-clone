import React, { Component } from 'react';
import styled from 'styled-components';
import './../css/Navbar.css';


class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <nav className='navbar fixed-top'>
                    <Wrap>
                        <img a href = "#"src="img/icons/apple.svg" alt="" />
                        <NavText> Store</NavText>
                        <NavText> Mac</NavText>
                        <NavText> iPad</NavText>
                        <NavText> iPhone</NavText>
                        <NavText> Watch</NavText>
                        <NavText> AirPods</NavText>
                        <NavText> TV & Home</NavText>
                        <NavText> Only on Apple</NavText>
                        <NavText> Accessories</NavText>
                        <NavText> Support</NavText>
                        <img a href = "#"src="img/icons/search.svg" alt="" />
                        <img a href = "#"src="img/icons/bag.svg" alt="" />
                    </Wrap>


                    <Phone>
                    
                    <img a href = "#"src="img/icons/134216_menu_lines_hamburger_icon (1).svg" alt="" />
                        <img a href = "#"src="img/icons/apple.svg" alt="" />
                        <img a href = "#"src="img/icons/bag.svg" alt="" />
                    </Phone>
                </nav>
          
            </div>
        );
    }
}
 
export default Navbar;

const Wrap = styled.div`
    color : #ffffff;
    display:block;
    margin-left:auto;
    margin-right:auto;
    max-width:100%;


    @media (max-width: 1023px){
    display: none;
  }

    `;


const Phone = styled.div`
   
    color : #ffffff;
    display:flex;
    justify-content:space-between;
    background-color: #313132;
    width: 100%;
    margin-top: -10px;

    @media (min-width: 1023px){
    display: none;
  }

    `;



const NavText = styled.span`
     font-size : 12px;
     margin : 0 20px 0 20px;
     
     &:hover{
         color:red;
     }
`;

