import "./home.css";

const Home = () => {


    return (
        <>
            <div className="container non-selectable">  
                <h2>
                    Bienvenue sur mon portfolio
                </h2>
                <p>
                    Je m'appelle Matthieu et je suis un développeur web et web mobile.
                    Je recherche une alternance pour devenir Concepteur Développeur d'applications,  Je suis tout à fait disposé à apprendre de nouveaux langages.
                    Parcourez mon site pour en apprendre davantage sur moi, mes compétences et les projets que j'ai réalisés. 
                    N'hésitez pas à me contacter et à me rajouter à votre réseau.
                </p>
                <p>
                    Bonne visite ! <span className="blink"></span> 
                </p>
            </div>
        </>
        
    );
}

export default Home;