import * as React from 'react';
import ThemeContext from './ThemeContext';
import { useContext } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lab2 from './lab2';
import Lab4 from './lab4';

export default function Main() { 
    const { theme, toggleTheme } = useContext(ThemeContext);  
      return (
        <div className={theme === 'light' ? 'light-theme' :'dark-theme' }>
    <Header/>
          <Router>
          <Menu />
                <Routes>
                  <Route path="/lab2"element={<Lab2 />}/>
                  <Route path="/lab4"element={<Lab4 />}/>
                </Routes>
          </Router>
    <Footer />
       </div>
    );
    }

