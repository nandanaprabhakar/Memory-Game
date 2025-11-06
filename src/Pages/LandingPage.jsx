import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
function LandingPage() {
  const navigate = useNavigate();
  return (
    <div>
      <section className='banner'>
        <Stack sx={{width:350,padding:10}}>
          <h1>ENTER <br />THE ARENA</h1>
          <p style={{fontSize:15}}>Flip, match, and celebrate every win.A game that’s easy to start but hard to stop playing.</p>
          <Link to={"/main"}>
          <Button variant='contained' sx={{width:120,padding:2,borderRadius:10,marginTop:1,marginLeft:10,backgroundColor:'black',color:'red'}}>Start</Button>
          </Link>
        </Stack>
      </section>
    
    </div>
  )
}

export default LandingPage