import "./Header.css";
import Profil from "./Profil/Profil";
import Typed from 'typed.js';
import React from 'react';


function Header() {

    const el = React.useRef(null);

	const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                ' <span>F</span>ront-<span>e</span>nd',
                ' <span>B</span>ack-<span>e</span>nd'
            ],
            typeSpeed: 120,
            backSpeed: 50,
            loop: true,
        };
        
        typed.current = new Typed(el.current, options);
        
        return () => {
            typed.current.destroy();
        }
    }, [])


    return (
        <>  
            <div>
                <header className="header title non-selectable">
                    <div>
                        <h1><span>M</span>atthieu <span>S</span>KRZYPCZAK</h1>
                        <h2 className='title-dev'><span>D</span>éveloppeur <p ref={el} /></h2>
                    </div>
                    <Profil />
                </header>
            </div>
        </>
    );
}

export default Header;