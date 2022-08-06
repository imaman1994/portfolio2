import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Grid ,Typography} from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
function NavBar() {
    return (
        <AppBar class='bg-black h-15 flex flex-row justify-between p-6 items-center'>
            <Grid>
                 <FaceIcon sx={{fontSize:'50px',color:'white'}}/>
            </Grid>
            <Grid class='flex flex-row text-slate-50 hover:cursor-pointer hover:text-'>
                <Typography class='mx-8'>About</Typography>
                <Typography>Experience</Typography>
            </Grid>
        </AppBar>
    );
}

export default NavBar;