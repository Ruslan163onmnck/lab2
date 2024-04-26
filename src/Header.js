import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ThemeContext from './ThemeContext';
import Switch from '@mui/material/Switch';



const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Switch defaultChecked color="secondary" onClick={toggleTheme}> Изменить тему</Switch>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;