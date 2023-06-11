import "./Card.css";
import projectData from '../../../sliderData';
import githubPict from '../../../assets/img/github.png'
import linkPict from '../../../assets/img/link.webp'
import construct from '../../../assets/img/construct.gif'

const Card = () => {


    return (

        <div className="container__card">
            {
                projectData.map(( project, index ) => (
                        <div key={ index } className="card">
                            <div className= "card_top">
                                <div className="card_top-left"></div>
                                <div className="card_top-middle"><h5>{ project.name }</h5></div>
                                <div className="card_top-right"></div>
                            </div>
                            <div className="card_content">
                                <div className="flash card_content-img">
                                    <img src={ project.image } alt={ project.name } />
                                </div>
                                <div className="card_content-link">
                                    <a href={ project.github } title={`Lien vers le repos GitHub ${ project.name }`} target="_blank" rel="noopener noreferrer"><img src={ githubPict } alt="github logo" id="github" /></a>

                                    { project.githubBack && (
                                        <a href={project.githubBack} title={`Lien vers le repos GitHub Back-end ${ project.name }`} target="_blank" rel="noopener noreferrer"> <img src={githubPict} alt="github logo" id="github" />
                                        </a>
                                    ) }

                                    <a href={ project.url } title={`Lien vers la page ${ project.name }`} target="_blank" rel="noopener noreferrer"><img src={ linkPict } alt="link logo" id="link" /></a>
                                </div>
                                <div className="card_content-tech">
                                    <div>
                                        { project.technoFront && (
                                                <p>Front : <span>{ project.technoFront.join(", ") }</span>  </p>
                                        ) }
                                    </div>
                                    <div>
                                        { project.technoBack && (
                                                <p>Back : <span>{ project.technoBack.join(", ") }</span>  </p>
                                        ) }
                                    </div>
                                    <div>
                                        { project.database && (
                                            <p>Base de donnée : <span>{ project.database.join(", ") }</span>  </p>
                                        ) }
                                    </div>                                           
                                </div>
                                <div className="card_content-description">
                                    <p>{ project.description }</p>
                                </div>
                            </div>
                                <div className="card_bot">
                            </div>
                        </div>
                ))
            }
            <div key="construct" className="card">
                <div className= "card_top">
                    <div className="card_top-left"></div>
                    <div className="card_top-middle"><h5>En construction..</h5></div>
                    <div className="card_top-right"></div>
                </div>
                <div className="card_content">
                    <div className="flash card_content-img">
                        <img src={ construct } alt="En construction" />
                    </div>
                    <div className="card_content-tech">
                        <div>
                            <p>EN COURS DE DÉVELOPPEMENT<span className="blink"></span></p>
                        </div>
                    </div>
                </div>
                <div className="card_bot"></div>              
            </div>
        </div>
    );
}

export default Card;