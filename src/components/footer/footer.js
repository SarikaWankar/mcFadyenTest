import { Box, Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    footer: {
        margin: "0 20px"
    },
    link: {
        marginTop: '4rem',
        marginBottom: '4rem'
    },
    linkItem: {
        padding: "10px 20px"
    }

}))

const Footer = (Props) => {
    const classes = useStyles()
    return <div className={classes.footer}>
        <div className={classes.link}>{Props.links?.map(el => <Link href="#" color="inherit" className={classes.linkItem} key={el}>{el}</Link>)}</div>
        <Typography textTransform={"uppercase"}>{Props.note} </Typography>
        <br />
        <Typography fontSize={'1.3rem'}>{Props.discription}</Typography>
        <br />
        <Typography>{Props.auther}</Typography>

    </div>
}
export default Footer;