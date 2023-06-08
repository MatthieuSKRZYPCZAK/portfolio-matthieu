import "./home.css";
import React from "react";

const Home = () => {

    // const [message, setMessage] = useState('');

  // useEffect pour simuler l'effet d'écriture en temps réel
    // useEffect(() => {
    //     const text = `Développeur spécialisé dans le domaine du web et du développement d'applications mobiles. Actuellement, je suis à la recherche d'une opportunité d'alternance afin de devenir Concepteur Développeur d'applications. Je suis ouvert à l'apprentissage de nouveaux langages et technologies pour enrichir mes compétences. Je vous invite à explorer mon site où vous pourrez en savoir plus sur mon parcours, mes compétences et les projets que j'ai réalisés. N'hésitez pas à me contacter et à me connecter à votre réseau professionnel. <span className="blink"></span>`;
    //     let currentText = '';
    //     let index = 0;

    //     const timer = setInterval(() => {
    //         currentText += text[index];
    //         setMessage(currentText);
    //         index++;

    //         if (index === text.length) {
    //             clearInterval(timer);
    //         }
    //     }, 100);

    //     return () => clearInterval(timer);
    // }, []);


    return (
        <>
            <div className="container non-selectable"> 
                
                    <h2>
                        Bienvenue 
                    </h2>
                
                    <p>
                    {/* {message} */}
                        Développeur spécialisé dans le domaine du web et du développement d'applications mobiles. 
                        Actuellement, je suis à la recherche d'une opportunité d'alternance afin de devenir Concepteur Développeur d'applications.
                        Je suis ouvert à l'apprentissage de nouveaux langages et technologies pour enrichir mes compétences.
                        Je vous invite à explorer mon site où vous pourrez en savoir plus sur mon parcours, mes compétences et les projets que j'ai réalisés.
                        N'hésitez pas à me contacter et à me connecter à votre réseau professionnel. <span className="blink"></span> 
                    </p>
            </div>
        </>
        
    );
}

export default Home;