import "./404.css";
import React from 'react';
import errorPicture from '../../assets/img/404.png';


const Error = () => {



    return (
        <>
            <div className="error404">               
                <div className="img404">
                    <img src={ errorPicture } alt="Mon profil"  id="Profil" />
                </div>
                <div class="error"></div>
            </div>
        </>
        
    );
}

export default Error;