import {Grid,Typography,Box} from '@mui/material';


function SideBar(){
    const arr = ['Ecomerce','Landing','Login Page','Form UI','Weather App','Food Recipe App']
    return (
        <Grid class='text-white'>
            <Grid class='px-5 py-3'>
                <Typography class='text-2xl'>Projects</Typography>
            </Grid>
            <Grid>
                <Box>
                {arr.map(item => {
			return (<Typography class='px-5 py-3 hover:bg-amber-600'>
    			{item}
		    </Typography>);
		})}  
            
            </Box>
            {/* <Typography>Landing PAge</Typography>
            <Typography>UI of Login Page</Typography>
            <Typography>Simple Form UI</Typography>
            <Typography>Weather App</Typography>
            <Typography>Food Recipe App</Typography> */}
            </Grid>
        </Grid>
    )
};

export default SideBar;