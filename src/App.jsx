import {BrowserRouter} from "react-router-dom";
import FalloutTheme from "./components/themes/Fallout/Fallout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import construct from './assets/img/construct.gif'
import "./App.css";



function App() {

    return (
        <BrowserRouter>
            <FalloutTheme /> 
            <Header /> 
            {/*<NavBar /> 
             <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/about' element={ <About />} />
                <Route path='/skills' element={ <Skills />} />
                <Route path='/contact' element={ <Contact />} />
                <Route path='/project' element={ <Project />} />
                <Route path='*' element= { <Error /> } />
            </Routes> */}
            <div className='box'>
                <div key="construct" className="card">
                    <div className= "card_top">
                        <div className="card_top-left"></div>
                        <div className="card_top-middle"><h5>En construction..</h5></div>
                        <div className="card_top-right"></div>
                    </div>
                    <div className="card_content">
                        <div className="flash card_content-img">
                            <img src={ construct } alt="En construction" />
                        </div>
                        <div className="card_content-tech">
                            <div>
                                <p>EN COURS DE DÉVELOPPEMENT<span className="blink"></span></p>
                            </div>
                        </div>
                    </div>
                    <div className="card_bot"></div>              
                </div>
            </div>

            <Footer />
        </BrowserRouter> 
    );
}

export default App;