import * as React from 'react';
import ThemeContext from './ThemeContext';
import { useContext } from 'react';
import Menu from './Menu';
import Footer from './Footer';
import Header from './Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lab2 from './labs/lab2/lab2';
import Lab4 from './labs/lab4/lab4';
import Lab5 from './labs/lab5/lab5';
import Lab6 from './labs/lab6/lab6';

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
                  <Route path="/lab5"element={<Lab5 />}/>
                  <Route path="/lab6"element={<Lab6 />}/>
                </Routes>
          </Router>
    <Footer />
       </div>
    );
    }

