import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FalloutTheme from "./components/themes/Fallout/Fallout";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";
import Error from "./components/404/404";
import "./App.css";


function App() {

    return (
        <BrowserRouter>
            <FalloutTheme /> 
            <Header /> 
            <NavBar /> 
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/about' element={ <About />} />
                <Route path='/skills' element={ <Skills />} />
                <Route path='/contact' element={ <Contact />} />
                <Route path='/project' element={ <Project />} />
                <Route path='*' element= { <Error /> } />
            </Routes>
            <Footer />
        </BrowserRouter> 
    );
}

export default App;