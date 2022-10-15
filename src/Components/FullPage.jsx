import React, { Component } from 'react';
import styled from 'styled-components';
import Template from './TemplateForFullPage';


export default class FullPage extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
            <Template title = 'MacBook Pro 13"' sloganImg = "img/logo_hero_mbp13__gdqp6kikbxe2_large_2x.png" background = "black" text = "white" image = "img/hero_mbp13__f88jcbca0ve6_large.jpg" twoButton/>
            <Template title = 'iPhone 13' slogan = "Your new superpower." background = "#FBFBFD" text = "black" image = "img/hero_iphone13_avail__gnqqkzuai6um_large.jpg" twoButton />
            <Template title = 'Get supercharged for college' slogan = "Save on Mac or iPad. Plus get a gift card up to $150." background = "#F5F5F7" text = "black" image = "img/hero_bts__bcuslanw39xe_large.jpg" />
     
            </React.Fragment>
        )
           
       
    }
}