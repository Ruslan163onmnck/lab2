import React from 'react';
import Container from './Container';
import Button from './Button';
import Navigation from './Navigation';
function App() {
  return (
        <Container>
          <Navigation />
        <p>
          Hello World!
        </p>
        <Button label="кнопка" onClick={() => alert('кнопка работает')} />
        </Container>
  );
}

export default App;
