import Card from "./Card/Card";
import "./project.css";


const Project = () => {

    


    return (

        <div className="container__project">
            <div className="container__project-title">
                <h2>Mes projets :</h2>
            </div>
            <div className="container__project-card">
                <Card />
            </div>
            
        </div>
    );
}

export default Project;