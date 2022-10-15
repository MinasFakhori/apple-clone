import React, { Component } from 'react';
import styled from 'styled-components';
import "./../css/Banner.css"

class Banner extends Component { 
    render() { 
        return (
            <Wrap>
                <img className = "unichef-icon" src="img/icons/unicef-1.png" alt="" />
                <a className = "link" href = "">Donate to support families affected by the war in Ukraine</a> 
            </Wrap>
            );
    }
}
 
export default Banner;


const Wrap = styled.div`
    margin-top: 30px;
    display:flex;
    justify-content: center;
    background-color: #ffffff;

    @media (max-width: 600px){
    display:none;
    }

    @media (max-width: 1000px){
    margin-top: 70px;
    }
`