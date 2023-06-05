import "./404.css";
import React from 'react';
import img404 from '../../assets/img/404.png';


const Error = () => {



    return (
        <>
            <div className="page404">               
                <div className="img404">
                    <img src={ img404 } alt="Mon profil" height={150} width={140} id="Profil" />
                </div>
                <div class="error"></div>
            </div>
        </>
        
    );
}

export default Error;