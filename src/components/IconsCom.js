import { Grid} from "@mui/material";
import {MovingComponent} from 'react-moving-text'




function IconsComp () {
    return(
        <Grid  container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{display:'flex',flexDirection:'column',justifyCenter:'center',alignItems:'center',marginTop:'15px',marginBottom:'10px'}}>
            <Grid class='text-3xl mt-4 text-slate-50'>
            <MovingComponent
  type="zoomOut"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="none">
Skills
  
</MovingComponent>
            </Grid>
       
        <Grid class='flex flex-row' >
  <img src="../assets/react.png" alt=''/>
  <img src="../assets/js.png" alt=''/>
  <img src="../assets/tailwind.png" alt=''/>
  <img src="../assets/ui.png" alt=''/>
  <img src="../assets/css.png" alt=''/>
  <img src="../assets/html.png" alt=''/>
  <img src="../assets/git.png" alt=''/>
  <img src="../assets/redux.png" alt=''/>
  <img src="../assets/bootstrap.png" alt=''/>
        </Grid>
        </Grid>
    )
}

export default IconsComp ; 