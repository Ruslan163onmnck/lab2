import Container from './Container';
import * as React from 'react';
import Button from '@mui/material/Button';
function App() {
  return (
        <Container>
        <p>
          Hello World!
        </p>
        <Button variant="contained" color="success" onClick={() => alert('кнопка работает')}>Кнопка</Button>
        </Container>
  );
}

export default App;