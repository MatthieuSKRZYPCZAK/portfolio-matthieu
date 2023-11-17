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
        }, 40);

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
                    Fort de plus de 14 ans d'expérience dans le secteur ferroviaire en tant que conducteur et moniteur de trains de marchandises, j'ai façonné un parcours professionnel riche et diversifié. Ce métier, à la fois difficile et exigeant, m'a permis de développer une multitude de compétences, notamment en matière de gestion du stress, de précision et de travail d'équipe.
                    </p>
                    <img className="computerPicture" src={ computerPicture } alt="Vaultboy computer" />  
                    <p className="para">
                    Cependant, animé par un désir de changement et une passion profonde pour l'informatique, j'ai entrepris une reconversion professionnelle significative. Attiré par le dynamisme et l'innovation incessante du monde numérique, j'ai choisi de me tourner vers le métier de développeur. Après une formation rigoureuse, j'ai obtenu le titre professionnel de Développeur Web et Web mobile, marquant ainsi le début d'un nouveau chapitre dans ma carrière.
                        
                    </p>
                    <p>
                    Ma passion pour les nouvelles technologies ne s'arrête pas là. Je suis particulièrement intéressé par les avancées dans le domaine du web, des applications mobiles et de l'univers des jeux vidéo. Cette curiosité pour la création et l'innovation technologique est le moteur de mon développement professionnel continu.
                    </p>
                    <p>
                    En intégrant ces domaines, je cherche à apporter ma rigueur, mon sens du détail et ma capacité d'adaptation, acquis au fil de mes années dans le secteur ferroviaire, à l'univers fascinant de la technologie et du développement informatique.
                    </p>
                    <p>
                    Je suis enthousiaste à l'idée de relever de nouveaux défis et de contribuer à des projets innovants en tant que développeur. Si vous souhaitez en savoir plus sur mon parcours ou discuter d'opportunités, n'hésitez pas à me contacter.
                        J'ai hâte de mettre {message} <span className="blink"></span>
                    </p>
                </div>
        </article>
    );
}

export default About;