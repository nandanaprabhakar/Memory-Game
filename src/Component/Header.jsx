import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Swal from 'sweetalert2'

function Header() {
  const about=()=>{
    Swal.fire({
  title: "Welcome to Memory Master!",
  text: " An exciting and interactive memory game designed to test your concentration and observation skills. In this game, players flip over cards to find matching image pairs, challenging their focus and quick thinking. With every match, your memory sharpens and your score improves. The game features smooth animations, a clean layout, and engaging visuals to make the experience enjoyable for all ages. You can reset the game anytime to start fresh or continue improving your best time. Celebrate your success with a victory alert once all pairs are matched, and enjoy the fun of becoming a true Memory Master!",
  imageUrl: "https://wallpapers.com/images/hd/cool-anime-character-332sg3rz7jfo61x1.jpg",
  imageWidth: 400,
  imageHeight: 250,
  imageAlt: "Custom image",
  background:"black",
  color:'red',
  confirmButtonColor:'red',
  confirmButtonText:'ok' 
});
  }
  return (
    <div>
         <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{backgroundColor:'black',color:'red'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Memory Master
          </Typography>
          <Button onClick={about} color="inherit">About Us</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Header