import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';


function About() {
  // functionality here... 
  const [data, setData] = useState(5);

  useEffect(()=>{
    setData(7);
  },[data])

  const increment = () => {
    setData(data + 1);
  }
  
  const decrement = () => {
    setData(data - 1);
  }

  return (
    <div>
      <button onClick={increment}>Increment</button> &nbsp; {data}
      <button onClick={decrement}>Decreement</button>

          <Grid container sx={{background: 'black', padding: '20px'}}>
              <Grid sm={6} md={6} lg={4} sx={{background: 'red', border: '1px solid'}}>Hello</Grid>
              <Grid sm={6} md={6} lg={4} sx={{background: 'red', border: '1px solid'}}>Hello</Grid>
              <Grid sm={6} md={6} lg={4} sx={{background: 'red', border: '1px solid'}}>Hello</Grid>
              <Grid sm={6} md={6} lg={4} sx={{background: 'red', border: '1px solid'}}>Hello</Grid>
              <Grid sm={6} md={6} lg={4} sx={{background: 'red', border: '1px solid'}}>Hello</Grid>
              <Grid sm={6} md={6} lg={4} sx={{background: 'red', border: '1px solid'}}>Hello</Grid>
              <Grid sm={6} md={6} lg={4} sx={{background: 'red', border: '1px solid'}}>Hello</Grid>
              <Grid sm={6} md={6} lg={4} sx={{background: 'red', border: '1px solid'}}>Hello</Grid>
              <Grid sm={6} md={6} lg={4} sx={{background: 'red', border: '1px solid'}}>Hello</Grid>
              <Grid sm={6} md={6} lg={4} sx={{background: 'red', border: '1px solid'}}>Hello</Grid>
              <Grid sm={6} md={6} lg={4} sx={{background: 'red', border: '1px solid'}}>Hello</Grid>
              <Grid sm={6} md={6} lg={4} sx={{background: 'red', border: '1px solid'}}>Hello</Grid>
          </Grid>
    </div>
  );
}

export default About;