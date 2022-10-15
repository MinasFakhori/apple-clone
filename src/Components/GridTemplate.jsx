import React, { Component } from 'react';
import styled from 'styled-components';


class GridTemplate extends Component {
    state = {  }

    render() { 
        return (
            <Wrap >
                <GridItem background = {this.props.background} colour = {this.props.colour}>
                    <Heads>
                    <Imgheader src= {this.props.headimg1} alt="" />
                    <Header>{this.props.header1}</Header>
                    </Heads>
                    <Slogan>{this.props.slogan1}</Slogan>
                    <M2 src={this.props.img1Slogan} alt="" />
                    <Availbale>{this.props.text1}</Availbale>
                    <LinkWrap>
                        <Link><A href = "#">{this.props.link11}</A>{' >'}</Link>
                        <Link><A href = "#">{this.props.link12}</A>{' >'}</Link>
                    </LinkWrap>
                    <Img src={this.props.img1} alt="" />
                </GridItem>
                <GridItem background2 = {this.props.background2} colour2 = {this.props.colour2}>
                <Heads>
                <Imgheader src= {this.props.headimg2} alt="" />
                <Header>{this.props.header2}</Header>
                </Heads>
                    <Slogan>{this.props.slogan2}</Slogan>
                    <LinkWrap>
                        <Link><A href = "#">{this.props.link21}</A>{' >'}</Link>
                        <Link><A href = "#">{this.props.link22}</A>{' >'}</Link>
                    </LinkWrap>
                    <Img src= {this.props.img2} alt="" />
                </GridItem>

            </Wrap>
        );
    }
}
 
export default GridTemplate;




const Wrap = styled.div`
  display: flex;
  flex-direction:row;


  @media (max-width: 1500px){
    flex-direction:column;
  }
  `;



const GridItem = styled.div`
background-color : ${props => props.background} ;
background-color : ${props => props.background2};
color: ${props => props.colour};
color: ${props => props.colour2};
    height:35em;
    text-align:center;
    flex:1;
    margin: 10px 5px 5px 5px;
`;


const Header = styled.h1`
    font-weight:bold;
`;

const M2 = styled.img`
    width: 180px;

    @media (max-width: 600px){
    max-width: 80%;
  }

`;


const Availbale = styled.p`
color: #86868B;
`;

const LinkWrap = styled.div`
display:flex;
text-align:center;
justify-content:center;
`

const A = styled.a`
 font-size: 1em;
 color: #1F78D2;
 text-decoration:none;

`

const Link = styled.p`
   font-size: 1.15em;
   color: #1F78D2;
   margin: -5px 7px 0 7px;
   `;


const Img = styled.img`
width: 44em;
margin-bottom:2px;

@media (max-width: 745px){
    width: 80%;
  }
`

const Imgheader = styled.img`
    width: 9em;

    @media (max-width: 740px){
    max-width: 95%;
    display: block;
    margin: 0 auto 0 auto;
  }
`
;



const Slogan = styled.p`
    font-size:1.3em;
    margin-top: 1em;

`;

const Heads = styled.div`
       margin-top: 40px;
`;

