import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FalloutTheme from "./themes/Fallout/Fallout";
import Header from "./Header/Header";
import NavBar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Project from "./Project/Project";
import Error from "./404/404";



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