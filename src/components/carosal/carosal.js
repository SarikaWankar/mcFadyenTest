import React from "react";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material';
import Image1 from '../../assets/image1.png';
import Image2 from '../../assets/image2.png';
import Image3 from '../../assets/‫image3.png'
import Image4 from '../../assets/image4.png';
// import Image5 from '../../assets/image5.png'
const Item=(props)=>{
    return (
        <Paper>
            <img src={props.item} width="100%"/>
        </Paper>
    )
}

const Carouel=()=>{
    var items = [Image1,Image2,Image3,Image4]
       

    return (
        <Carousel>
        {
            items.map( (item, i) => <Item key={i} item={item} /> )
        }
    </Carousel>
    );
}
export default Carouel;