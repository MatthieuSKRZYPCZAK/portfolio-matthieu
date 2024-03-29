import "./home.css";
import React, { useEffect, useState } from "react";

const Home = () => {

    const [message, setMessage] = useState('');

    useEffect(() => {
        const text = `Concepteur développeur d'applications. Je suis à la recherche d'une opportunité de stage de fin de formation (Du 01 juillet 2024 au 23 août 2024). Je suis ouvert à l'apprentissage de nouveaux langages et technologies pour enrichir mes compétences. Je vous invite à explorer mon site où vous pourrez en savoir plus sur mon parcours, mes compétences et les projets que j'ai réalisés. N'hésitez pas à me contacter et à me connecter à votre réseau professionnel.`;
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