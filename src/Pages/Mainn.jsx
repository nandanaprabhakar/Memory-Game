import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
function Mainn() {
  const navigate = useNavigate();

  const [complete,setComplete]=useState('')
  //for hold pieces in state
  const [icon, setIcon] = useState([]);
  const icons = [
    "https://img.freepik.com/free-photo/selflove-illustrated-anime-style_23-2151103327.jpg?semt=ais_hybrid&w=740&q=80",
    "https://i.pinimg.com/736x/a6/c4/86/a6c486a84700a76c7275974be9b4e1b9.jpg",
    "https://media.craiyon.com/2025-08-01/5AVRUUHpR-2m-wzfNcDfRA.webp",
    "https://media.craiyon.com/2025-07-11/oBiP169aRj6RigKNbaqxWA.webp",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8oi2HfIIjiqtVFGThrHsi6Xt7sNf5CfhlmbExVFrTSzl2o1kHAt9S5eeKTaQ4y9hhRWQ&usqp=CAU",
    "https://i.pinimg.com/236x/e7/4d/70/e74d70c41448ab737dbc7f075d6d4734.jpg"
  ];
  console.log(icons);
  const start = () => {
    const duplicateIcon = icons.concat(icons)
    console.log(duplicateIcon);
    const newIcons = []
    while (newIcons.length < icons.length * 2) {
      const randomIndex = Math.floor(Math.random() * duplicateIcon.length);
      newIcons.push({
        emoji: duplicateIcon[randomIndex],
        flipped: false,
        solved: false,
        position: newIcons.length,
      });
      duplicateIcon.splice(randomIndex, 1);
    }
    setIcon(newIcons);
  }
  useEffect(() => {
    start();
  }, [])
  const playGame = (data) => {
    setIcon(icon.map((item) => {
      if (item.position == data.position) {
        item.flipped = !item.flipped;
      }
      return item
    }))
  }
  console.log(icon);
  const gameLogic = () => {
  const flippedData = icon.filter(item => item.flipped && !item.solved);
  if (flippedData.length === 2) {
    setTimeout(() => {
      if (flippedData[0].emoji === flippedData[1].emoji) {
        // If they match, mark both as solved
        setIcon(icon.map((items) => {
          if (items.position === flippedData[0].position || items.position === flippedData[1].position) {
            items.solved = true;
          }
          return items;
        }));
      } else {
        // If not matching, flip them back
        setIcon(icon.map((items) => {
          if (items.position === flippedData[0].position || items.position === flippedData[1].position) {
            items.flipped = false;
          }
          return items;
        }));
      }
    }, 800);
  }
};
const checkGameFinished = () => {
  if (icon.every((icon) => icon.solved)) {
    console.log("Solved");

    Swal.fire({
      title: "Memory Master! 👑",
      text: "You’ve Matched Them All!",
      icon: "success",
      background: "black",
      color: "red",
      confirmButtonColor: "red",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/main'); 
      }
    });
  } else {
    console.log("Not Solved");
  }
};

  useEffect(()=>{
    gameLogic();
    if(icon.length>0){
      checkGameFinished()
    }
  },[icon])
  const reset=()=>{
    setComplete('')
    start()
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1, p: 3, backgroundColor: 'black', paddingLeft:40}}>
        <Box>
        <h1>{complete}</h1>
      </Box>
        <Grid container spacing={1} sx={{ backgroundColor: 'black', width: 800 ,paddingLeft:3}}>
          {icon.map((data, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              {/* xs=12 → full width on mobile
                sm=6  → 2 columns on tablets
                md=3  → 4 columns on desktops */}
              <Item sx={{ width: 200,backgroundColor:'black'}}>
                <div onClick={() => playGame(data)} className={`flip-card ${data.flipped||data.solved? 'active' : ''}`} style={{ width: '200px' }}>
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <img
                        src="https://i.pinimg.com/736x/36/08/fe/3608fede746d1d6b429e58b945a90e1a.jpg"
                        alt="Avatar"
                        style={{
                          width: '100%',
                          // height: '250px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                        }}
                      />
                    </div>
                    <div className="flip-card-back">
                      <img
                        src={data.emoji} style={{height:'200px'}}/>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
          ))}
            <Stack spacing={7} direction="row" sx={{paddingLeft:25,paddingBottom:3}}>
      <Button onClick={reset} sx={{padding:2,borderRadius:10,width:150,backgroundColor:'red',color:'black'}} variant="contained">Reset</Button>
      <Link to={'/'}>
      <Button sx={{padding:2,borderRadius:10,width:150,backgroundColor:'red',color:'black'}} variant="contained">Exit</Button>
      </Link>
    </Stack>
        </Grid>
      
      </Box>
    </div>
  )
}

export default Mainn
