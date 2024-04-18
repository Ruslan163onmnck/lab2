import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
function Menu() {

  return (
    <nav>
     <ButtonGroup variant="contained" aria-label="Basic button group">
  <Button>Лабораторная №2</Button>
  <Button>Лабораторная №3</Button>
  <Button>Лабораторная №4</Button>
</ButtonGroup>
    </nav>
  );
}

export default Menu;