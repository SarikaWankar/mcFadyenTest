import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import CustomTabPanel from '../../components/tabs/tabs';
import MockJson from '../../constant/mock.json';
import { makeStyles } from "@mui/styles";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './home.css';
import ProductImg from '../../assets/Image.png'
import { Box, Grid } from "@mui/material";
import {updateProductDetailsAction} from '../../redux/actions/actions'
import ProductDetails from '../../components/productDetails/productDetails';
import Carouel from '../../components/carosal/carosal';
import {useSelector,useDispatch} from 'react-redux'
const useStyles = makeStyles((theme) => ({
    image: {},
    heart: { position: "fixed", right: 420 },
})
)
const drawerWidth = 325;
const Home = () => {
    const classes = useStyles();
    const dispatch=useDispatch()
    const {productDetails} =useSelector((state) => state?.reducer)
    const [product, setProduct] = useState(productDetails)
    const colorChange = (e) => {
        debugger
        const colorsUpdate = product.colors.map(m => {
            if (e.target.id === m.name) {
                m.selected = true;
            } else {
                m.selected = false
            }
            return m
        })
        setProduct({ ...product, colors: colorsUpdate })
        dispatch(updateProductDetailsAction({ ...product, colors: colorsUpdate }))
    }
    const sizeChange = (e) => {
        debugger
        const colorsUpdate = product.size.map(m => {
            if (e.target.id === m.name) {
                m.selected = true;
            } else {
                m.selected = false
            }
            return m
        })
        setProduct({ ...product, size: colorsUpdate })
        dispatch(updateProductDetailsAction({ ...product, size: colorsUpdate }))
    }
    return <Box  sx={{padding: { xs: '20px', sm: '', }}}><Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
            <Sidebar variant="permanent"
                xs={{
                    width: drawerWidth,
                    marginTop: { md: 70 },
                    display: { xs: 'none', sm: 'flex', },
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', marginTop: "70px" },
                }}>
                <CustomTabPanel mockData={MockJson} />
            </Sidebar>
        </Grid>
        <Grid item xs={12} sm={6} marginTop={"80px"}>
            <Box className={classes.image} component="main" textAlign={'center'}>
                <FavoriteBorderIcon className={classes.heart}/>
                <Box className="carousel" sx={{display: { xs: 'block', md: 'none' }}}>
                    <Carouel />
                </Box>
                <Box sx={{display: { xs: 'none', md: 'block' }}}>
                    <img src={ProductImg} alt="product-image" width="540px" />
                </Box>
                <Box sx={{display: { xs: 'none', md: 'block' }}}>
                <Footer
                    links={["Jonathan Simkhai", "Blazers", "Viscose"]}
                    note={"a note from the editor "}
                    discription={" The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky."}
                    auther={"By MINNA SHIM, Fashion Editor"}
                />
                </Box>
            </Box>
        </Grid>
        <Grid item xs={12} sm={3} marginTop={"80px"}>
            <ProductDetails product={product} colorChange={colorChange} sizeChange={sizeChange} />
            <Box sx={{display: { xs: 'block', md: 'none' }}}>
                <Footer
                    links={["Jonathan Simkhai", "Blazers", "Viscose"]}
                    note={"a note from the editor "}
                    discription={" The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky."}
                    auther={"By MINNA SHIM, Fashion Editor"}
                />
                </Box>
        </Grid>
    </Grid>
    </Box>
}

export default Home;

