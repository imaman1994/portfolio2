import { Divider, Grid } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Grid class='flex flex-column justify-center items-center'>
        <Grid>
           <Divider class='w-40 my-5 text-red-900'/>  
        <Grid>
            <LinkedInIcon sx={{color:'#0A66C2',fontSize:'50px'}}/>
            <FacebookIcon sx={{color:'#4267B2',fontSize:'50px'}}/>
            <InstagramIcon sx={{color:'blue',fontSize:'50px'}}/>
        </Grid>
        </Grid>
        </Grid>
    )
};

export default Footer;