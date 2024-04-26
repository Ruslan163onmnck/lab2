import SimpleContainer from '../../Container';
import * as React from 'react';
import Button from '@mui/material/Button';

function lab2() {
    return (
          <SimpleContainer>
          <p>
            Hello World!
          </p>
          <Button variant="contained" color="success" onClick={() => alert('кнопка работает')}>Кнопка</Button>
          </SimpleContainer>
    );
  }
  
  export default lab2;