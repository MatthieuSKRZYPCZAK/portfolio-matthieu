import "./Footer.css";
import githubPict from '../../assets/img/github.png';
import linkedinPict from '../../assets/img/linkedin.png';
import mailPict from '../../assets/img/mail.png';
import twitterPict from '../../assets/img/twitter.png';


const Footer = () => {


    return (
        <>
            <footer className="imgContact non-selectable">
                <a href="https://github.com/MatthieuSKRZYPCZAK" target="_blank" rel="noopener noreferrer"><img src={ githubPict } alt="github logo" id="github" /></a>
                <a href="https://www.linkedin.com/in/matthieu-skrzypczak/" target="_blank" rel="noopener noreferrer"><img src={ linkedinPict } alt="linkedin logo" id="linkedin" /></a>
                <a href="mailto:skrz.matthieu@gmail.com"><img src={ mailPict } alt="mail logo" id="mail" /></a>
                <a href="https://twitter.com/MaTTythonXesh" target="_blank" rel="noopener noreferrer"><img src={ twitterPict } alt="twitter logo" id="twitter" /></a>
            </footer>
        </>
    );
}

export default Footer;