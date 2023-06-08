import "./about.css";
import trainPicture from '../../assets/img/train.png';
import vaultPicture from '../../assets/img/vault.gif';
import computerPicture from '../../assets/img/computer.webp';

const About = () => {


    return (

        <article className="flash container non-selectable"> 
                <h2>
                    Qui suis-je ?
                </h2>
                <div>
                    <img className="trainPicture" src={ trainPicture } alt="Train" />
                    <p className="para">
                        Je m'appelle Matthieu et j'ai accumulé plus de 14 ans d'expérience dans le secteur ferroviaire en tant que conducteur/moniteur de trains de marchandises. 
                        Ce métier m'a permis de développer diverses compétences.
                        Bien que difficile et exigeant, ce métier a eu des répercussions sur ma santé au fil des années. 
                    </p>
                    <img className="computerPicture" src={ computerPicture } alt="Vaultboy computer" />  
                    <p className="para">
                    à cœur de changer de carrière, j'ai décidé de me reconvertir dans un domaine qui me passionne : l'informatique.
                        Pour cette reconversion, j'ai choisi de me tourner vers le métier de développeur. J'ai entamé une formation pour obtenir un titre professionnel
                        de Développeur Web et Web Mobile.
                    </p>
                    <p>
                        Je suis extrêmement motivé, prêt à poursuivre mes études afin de devenir Concepteur Développeur d'Applications.
                        J'ai hâte de mettre à profit mon expérence et mes compétences au service de mes futurs collaborateurs. <span className="blink"></span>
                    </p>
                </div>
                <img className="vaultPicture" src={ vaultPicture } alt="Vault Boy" />
        </article>
    );
}

export default About;