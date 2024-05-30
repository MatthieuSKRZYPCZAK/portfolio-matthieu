import "./home.css";
import React, { useEffect, useState } from "react";

const Home = () => {

    const [message, setMessage] = useState('');

    useEffect(() => {
        const text = `Concepteur développeur d'applications, passionné par le développement et l'informatique en général. Je travaille principalement avec des technologies telles que Java Spring Boot, Javascript(React), HTML/CSS, ainsi que d'autres langages comme PHP, C#. N'hésitez pas à me contacter et à m'ajouter à votre réseau professionnel.`;
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
        <>
            <div className="container-home non-selectable"> 
                    <h2>
                        Bienvenue 
                    </h2>
                    <p>
                    {message} <span className="blink"></span>
                    </p>
            </div>
        </>
        
    );
}

export default Home;