import "./about.css";
import trainPicture from '../../assets/img/train.png';
import computerPicture from '../../assets/img/computer.webp';
import React, { useEffect, useState } from "react";

const About = () => {

    const [message, setMessage] = useState('');

    useEffect(() => {
        const text = `à profit mon expérience et mes compétences au service de mes futurs collaborateurs.`;
        let currentText = '';
        let index = 0;

        const timer = setInterval(() => {
            currentText += text[index];
            setMessage(currentText);
            index++;

            if (index === text.length) {
                clearInterval(timer);
            }
        }, 20);

        return () => clearInterval(timer);
    }, []);


    return (

        <article className="flash container-about non-selectable"> 
                <h2>
                    Qui suis-je ?
                </h2>
                <div>
                    <img className="trainPicture" src={ trainPicture } alt="Train" />
                    <p className="para">
                        Je m'appelle Matthieu et j'ai accumulé plus de 14 ans d'expérience dans le secteur ferroviaire en tant que conducteur/moniteur de trains de marchandises. 
                        Ce métier difficile et exigeant m'a permis de développer diverses compétences.
                    </p>
                    <img className="computerPicture" src={ computerPicture } alt="Vaultboy computer" />  
                    <p className="para">
                    à cœur de changer de carrière, j'ai décidé de me reconvertir dans un domaine qui me passionne : l'informatique.
                        Pour cette reconversion, j'ai choisi de me tourner vers le métier de développeur. Au terme d'une formation, j'ai obtenu un titre professionnel de Développeur Web et Web mobile.
                        
                    </p>
                    <p>
                        Je suis extrêmement motivé, prêt à poursuivre mes études afin de devenir Concepteur Développeur d'Applications.
                        J'ai hâte de mettre {message} <span className="blink"></span>
                    </p>
                </div>
        </article>
    );
}

export default About;