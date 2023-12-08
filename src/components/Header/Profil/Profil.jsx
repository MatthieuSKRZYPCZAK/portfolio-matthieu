import './Profil.css';
// import profilePicture from '../../../assets/img/mat.jpg';
import logovault from '../../../assets/img/logoavatar.png';
import React from "react";


const Profil = () => {

    
    return (

        <>
        <div className="pipboy">
                <div className= "pipboy_top">
                    <div className="pipboy_top-left"></div>
                    <div className="pipboy_top-middle"><h5>Bienvenue</h5></div>
                    <div className="pipboy_top-right"></div>
                </div>
                <div className="flash pipboy_content">
                    <div className="pipboy_content-left">
                    <a href="/CV_SKRZYPCZAK_MATTHIEU.pdf" download><img src={ logovault } alt="Logo Vault" height={130} width={130} /></a>
                    </div>
                    {/* <div className="pipboy_content-right">
                        <img src={ profilePicture } alt="Mon profil" height={150} width={140} id="Profil" style={{ borderRadius:'10%'}} />
                    </div> */}
                </div>
                <div className="pipboy_bot">
                    <div className="pipboy_bot-left"></div>
                    <div className="pipboy_bot-middle">
                    <a href="/CV_SKRZYPCZAK_MATTHIEU.pdf" download><h6>MON CV</h6></a>
                    </div>
                    <div className="pipboy_bot-right"></div>
                </div>
            </div>
        </>
    );
}

export default Profil;