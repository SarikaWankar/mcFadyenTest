import React from "react"
import { makeStyles } from "@mui/styles";

import { Box, Button, Stack, Grid, Typography } from "@mui/material";
import Color1 from '../../assets/color1.png';
import Color2 from '../../assets/color2.png'
const useStyles = makeStyles((theme) => ({
    name: {
        lineHeight: "36px",
        fontSize: "2.5rem",
        fontWeight: "normal",
        marginBottom: "0"
    },
    price: {
        fontWeight: 500,
        paddingTop: "5px",
        paddingBottom: "20px"
    },

    span: { fontWeight: '500' },
    image: {
        border: "1px solid #000"
    },
    size: { border: "1px solid #ddd", borderRadius: '50px', padding: "5px 20px", marginRight: 5 },
    sizeSelected: { border: "1px solid #000", backgroundColor: '#000', color: "#fff" },
    button: {
        border: "1px solid #000 !important",
        borderRadius: '50px !important',
        backgroundColor: '#000 !important',
        color: "#fff",
        marginTop: "20px"
    },

})
)
const ProductDetails = (props) => {
    const { product, isActive } = props;
    const classes = useStyles();
    return <Box variant="permanent" 
            sx={{ position: { xs: "static", md: "fixed" }, 
            width: { md: '320px',xs:"auto", marginRight:"20px" }, 
            right: 0 }}>
            <h2 className={classes.name}>{product.productName}</h2>
            <div>{product.details}</div>
            <div className={classes.price}>${product.price}</div>
            <p><span className={classes.span}>COLORS </span>
            <span>{product?.colors.find(el => el.selected).name} &nbsp;</span>
            </p>
            <div>
                {product?.colors.map(el => {
                    return <img src={Color1} onClick={(e) => { props.colorChange(e) }} className={el.selected ? classes.image : ""} id={el.name} key={el.name} />

                })}
            </div>

            <p><span className={classes.span}>SIZE</span> <span>{product?.size.find(el => el.selected).name} &nbsp;</span> </p>
            <div>{product?.size.map(s => {
                return <span className={s.selected ? classes.sizeSelected + " " + classes.size : classes.size} id={s.name} key={s.name}
                    onClick={(e) => props.sizeChange(e)}
                    style={{ cursor: s.available ? "pointer" : "pointer" }}>{s.name}</span>
            })}</div>
            <br />
            <Button variant="contained" className={classes.button} fullWidth={true}>ADD TO BAG</Button>
        </Box>
}

export default ProductDetails