import './App.css';
import { Grid } from '@mui/material';
import NavBar from './components/NavBar';
import MainDev from './components/MainDev';
import SideBar from './components/SideBar';

function App() {
  return (
    <Grid class='font-Playfair'>
      <NavBar/>
      <Grid class="pr-5 flex flex-row bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
      <Grid class='w-1/6'>
      <SideBar/>
      </Grid>
      <Grid class='w-full flex justify-center'>
      <MainDev/>
      </Grid>
      </Grid>
      
    </Grid>
  );
}

export default App;
