import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import FalloutTheme from "./themes/Fallout/Fallout";
import Header from "./Header/Header";
import NavBar from "./Navbar/Navbar";
// import Profil from "./Header/Profil/Profil";
// import Header from "./Components/Header/Header";
// import Home from "./Components/Home/Home";
// import About from "./Components/About/About";
// import Skills from "./Components/Skills/Skills";
// import Contact from "./Components/Contact/Contact";
// import Project from "./Components/Project/Project";
// import Error from "./Components/404/404";
// import StyleFallout from "./Components/StyleFallout/StyleFallout";
// import Footer from "./Components/Footer/Footer";

function App() {


    return (

        <BrowserRouter>
        <FalloutTheme />
        <Header />
        <NavBar />
        {/* <StyleFallout />
            <Header />
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/about' element={ <About />} />
                <Route path='/skills' element={ <Skills />} />
                <Route path='/contact' element={ <Contact />} />
                <Route path='/project' element={ <Project />} />
                <Route path='*' element= { <Error /> } />
            </Routes>
            <Footer /> */}
        </BrowserRouter>
    );
}

export default App;