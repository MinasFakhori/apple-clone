import React, { Component } from 'react';
import styled from 'styled-components';


class TemplateForFullPage extends Component {
    state = {  } 

    
    render() {
        
        return (
            <Wrap background = {this.props.background} text= {this.props.text}>
                <Header>{this.props.title}</Header>
                <M2Wrap>
                    <M2 className = "m2" src= {this.props.sloganImg} alt=""></M2>
                    <Slogan>{this.props.slogan}</Slogan>
                </M2Wrap>
                {this.whatButtons()}
                <MacImgDiv>
                <MacImg src={this.props.image} alt="" />
                </MacImgDiv>
            </Wrap>
            );
        }


whatButtons = () =>{
    if (this.props.twoButton){
        return(
        <LinkWrap>
        <Link><A href = "#">Learn more</A>{' >'}</Link>
        <Link><A href = "#">Buy</A>{' >'}</Link>
        </LinkWrap>
        );
    }else{
        return(
        <LinkWrap>
        <Link><A href = "#">Shop now</A>{' >'}</Link>
        </LinkWrap>);    
}};

}
export default TemplateForFullPage;

const Wrap = styled.div`
    margin-top: 1em; 
    height: 35em;
    background-color:${(props) => (props.background)};
    justify-content: center;
    flex-direction:column;
    color: ${(props) => (props.text) };

`;

const Slogan = styled.p`
font-size: 1.6em;
margin-top: -1em;


`;


const Header = styled.h1`
    position:relative;
    color: ${(props) => (props.text)};
    text-align:center;
    font-size: 3.4em;
    font-weight:bold;
    padding-top:40px;

    @media (max-width: 600px){
    font-size: 1.7em;
  }
`;

const M2Wrap = styled.div` 
text-align:center;
justify-content:center;

@media (max-width: 600px){
    max-width: 80%;
    margin-left:auto;
    margin-right: auto;
  }


`;


const M2 = styled.img`
   width: 18em;


   @media (max-width: 600px){
    max-width: 100%;
  }
`;


const MacImg = styled.img`
width :650px;
justify-content:center;

@media (max-width: 650px){
    max-width: 100%;
  }
`;

const MacImgDiv = styled.div`
display:flex;
justify-content:center;
`;
const Link = styled.p`
   font-size: 1.4em;
   color: #1F78D2;
   padding: 0 20px 0 20px;
   `;

const A = styled.a`
 font-size: 1em;
 color: #1F78D2;
 text-decoration:none;

`

const LinkWrap = styled.div`
display:flex;
text-align:center;
justify-content:center;

@media (max-width: 600px){
    max-width: 100%;
    flex-direction:column;
  }


`