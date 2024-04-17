import React from 'react';
import Button from './Button';

function Navigation() {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
      <Button label="Главная" onClick={() => alert("Переход на главную страницу")} />
      <Button label="О сайте" onClick={() => alert("Переход на страницу о сайте")} />
      <Button label="Контакты" onClick={() => alert("Переход на страницу контактов")} />
    </div>
  );
}

export default Navigation;