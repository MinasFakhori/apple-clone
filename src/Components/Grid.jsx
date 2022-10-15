import React, { Component } from 'react';
import GridTemplate from './GridTemplate';


class Grid extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <GridTemplate 
                    header1 = "MacBook Air"
                    img1Slogan = "img/logo_promo_macbookair__hy9ktdqqtv2a_large.png"
                    text1 = "Avaible in July"
                    link11 = "Learn more"
                    link12 = "View pricing"
                    img1 = "img/promo_macbookair__fywl7i82fueu_large.png"
                    header2 = "iPhone 13 Pro"
                    imgHead2 = "img/promo_logo_ipadair__frwnnsqveeye_large.png"
                    slogan2 = "Oh. So. Pro"
                    link21 = "Learn more"
                    link22 ="Buy"
                    img2 = "img/promo_iphone13pro_avail__beadms4ldidu_large.jpg"
                    background= "#FBFBFD"
                    background2 = "#FBFBFD"
                    colour = "black"
                    /> 

                <GridTemplate 
                    colour = "white"
                    colour2 = "white"
                    background = "#000000"
                    background2 = "#000000"
                    header1 = 'MacBook Pro 13"'
                    headimg2 = "img/promo_logo_ipadair__frwnnsqveeye_large.png"
                    img1Slogan = "img/logo_hero_mbp13__gdqp6kikbxe2_large_2x.png"
                    link11 = "Learn more"
                    link12 = "Buy"
                    img1 = "img/promo_mbp13__buwssod6c8vm_large.jpg"
                    slogan2 = "Light. Bright. Full of might."
                    link21 = "Learn more"
                    link22 ="Buy"
                    img2 = "img/promo_ipadair_avail__ferd4bfpcdm6_large.jpg"/> 


                <GridTemplate 
                    colour = "black"
                    colour2 = "white"
                    background = "#FBFBFD"
                    background2 = "#1A1A1A"
                    headimg1 = "img/logo__dcojfwkzna2q_large.png"
                    slogan1 = "Get up to 3% Daily Cash back with every purchase."
                    link11 = "Learn more"
                    link12 = "Buy"
                    img1 = "img/tile__cauwwcyyn9hy_large.jpg"        
                    headimg2 = "img/logo_promo_katy_perry__bb5nun6svbsi_large.png"
                    slogan2 = "New Artist Spotlight workouts with music by Katy Perry"
                    img2 = "img/promo_katy_perry__eqekd92guu4i_large.jpg"
                    link21 = "Learn more"
                    link22 ="Buy" />


            </React.Fragment>
        );
    }
}
 
export default Grid;