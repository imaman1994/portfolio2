import React from 'react';
import {Typography,Grid} from '@mui/material'
import {MovingComponent} from 'react-moving-text'

function MainDev() {
    return (
        <Grid class=" text-white text-4xl">
            <MovingComponent
  type="fadeInFromLeft"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
  Aman Kumar
</MovingComponent>
<MovingComponent
  type="fadeInFromRight"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
<Typography>A Web Developer</Typography>  
  
</MovingComponent>
<MovingComponent
  type="flash"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
 <Typography class='text-lg max-w-xl'> Since 1 years I’m working as web developer in Sketchish and Ahmedabad. have developed many 
                website and apart from the I have been part of web design project, office work and as freelancer. </Typography> 
  
</MovingComponent>
           
        </Grid>
    );
}

export default MainDev;