import "./Card.css";

const Card = () => {

    const projects = [
        {
            title: 'J\'adopte un humain',
            img: 'img/jadopte.png',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nemo maxime aperiam, corporis aliquam, ab consequuntur at mollitia consectetur nam velit perspiciatis beatae laboriosam qui in et illum. Magni, assumenda?",
            front: "",
            back: "",
            github: "",
            link: "",
            galerie: [''],
        }

    ]

    return (
        <div className="container__card">
            {
                projects.map((project) => (
                    <>
                        <div key={project.title}>
                            <h4>{project.title}</h4>
                        </div>
                        <div>
                        <img src={ project.img } alt="J'adopte un humain" height={400} width={600} />
                        </div>
                        <div>
                            <p> { project.description }</p>
                        </div>
                    </>
                    
                ))
            }
        </div>
    );
}

export default Card;