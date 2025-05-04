import React from 'react';
import logo from '../assets/logotransparent.png';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = ['Home', 'About', 'Services', 'Contact'];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
     <Box sx={{ display: 'block' }}>
        <img
          src={logo}
          alt="Logo"
          style={{ height: 40 }}
        />
      </Box>
      <List>
        {navLinks.map((item) => (
          <ListItem button key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <AppBar component="nav" position="static" sx={{ bgcolor: '#000101' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo on the left */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <img
              src={logo}
              alt="Logo"
              style={{ height: 50}}
            />
          </Box>

          {/* Centered navLinks */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              gap: 2,
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          >
            {navLinks.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>

          {/* Hamburger icon (right) */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
