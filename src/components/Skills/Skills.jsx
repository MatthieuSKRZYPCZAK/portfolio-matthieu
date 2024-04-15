import "./skills.css";
import React from "react";



const Skills = () => {

    const quality = [
        {
            name: 'rigoureux',
            logo: '/img/rigueur.webp'
        },
        {
            name: 'esprit d\'équipe',
            logo: '/img/teams.png'
        },
        {
            name: 'Communication',
            logo: '/img/com.webp'
        },
        {
            name: 'Curieux',
            logo: '/img/curieux.webp'
        },
        {
            name: 'à l\'écoute',
            logo: '/img/listen.webp'
        },
        {
            name: 'Persévérant',
            logo: '/img/tena.webp'
        },
        {
            name: 'Réactif',
            logo: '/img/reactif.webp'
        },
        {
            name: 'Créatif',
            logo: '/img/creativity.webp'
        },
        {
            name: 'Autonome',
            logo: '/img/auto.webp'
        },
        {
            name: 'Autodidacte',
            logo: '/img/learn.webp'
        },
    ]


    const skillz = [ 
        { 
            name: 'HTML',
            logo: '/img/html.png'
        },
        { 
            name: 'CSS',
            logo: '/img/css.png'
        },
        { 
            name: 'JavaScript',
            logo: '/img/js.png'
        },
        { 
            name: 'Node Js',
            logo: '/img/node.png'
        },
        { 
            name: 'PostgreSQL',
            logo: '/img/postgre.png'
        },   
        { 
            name: 'React',
            logo: '/img/react.png'
        }, 
        { 
            name: 'SQL',
            logo: '/img/sql.png'
        }, 
        { 
            name: 'Git',
            logo: '/img/git.png'
        }, 
        { 
            name: 'Github',
            logo: '/img/github.png'
        }, 
        { 
            name: 'TypeScript',
            logo: '/img/typescript.webp'
        }, 
        { 
            name: 'Python',
            logo: '/img/python.png'
        }, 
        { 
            name: 'Php',
            logo: '/img/php.png'
        }, 
        { 
            name: 'MySQL',
            logo: '/img/mysql.png'
        }, 
        { 
            name: 'Java',
            logo: '/img/java.png'
        }, 
        { 
            name: 'Kotlin',
            logo: '/img/kotlin.jpg'
        }, 
        { 
            name: 'SQL Server',
            logo: '/img/sqlserver.jpg'
        }, 
    ]

    // const skillzInProgress = [
    //     { 
    //         name: 'TypeScript',
    //         logo: '/img/typescript.webp'
    //     }, 
    //     { 
    //         name: 'Python',
    //         logo: '/img/python.png'
    //     }, 
    //     { 
    //         name: 'Php',
    //         logo: '/img/php.png'
    //     }, 
    //     { 
    //         name: 'MySQL',
    //         logo: '/img/mysql.png'
    //     }, 
    //     { 
    //         name: 'Java',
    //         logo: '/img/java.png'
    //     }, 
    // ]


    return (
        <>
            <div className="container-skills">
                <div>
                    <div className="container__skills-title non-selectable">
                        <h2>Compétences techniques :</h2>
                    </div>
                    <div className="container__skills-content non-selectable">
                        
                            {
                                skillz.map((skill) => (
                                    <div className='flash skillzItem non-selectable' key={skill.name}>
                                        <div>
                                            <img  src={skill.logo} alt={ `${ skill.name }` } />
                                        </div>
                                        <div>
                                            <p>{skill.name}</p>
                                        </div>
                                    </div>
                                ))
                            }
                    </div>
                </div>
                
                <div>
                    <div className="container__other-title non-selectable">
                        <h2>Autres :</h2>
                        
                    </div>
                    <div className="container__other-content non-selectable">
                        <div className='otherItem non-selectable'>
                            <div className="otherItem-select">
                                <p><span><b>F</b>ramework :</span> Java SE 8 et EE (Tomcat 9), Spring (Core, ORM, DATA, MVC, REST), Symfony, ASP.NET MVC, mobile avec android 7, Bootstrap, Xamarin, Ionic</p>
                                <p><span><b>O</b>RM :</span> Doctrine, JPA 2 avec Hibernate 4.x, Entity Framework, Sequelize</p>
                                <p><span><b>M</b>éthodes :</span> Modélisation des données (Oracle CDM), Méthode de développement Agile (Scrum), UML(Unified Modeling Language)</p>
                                <p><span><b>S</b>ystèmes <b>d</b>'<b>e</b>xploitations :</span> Windows, Linux</p>
                                <p><span><b>O</b>utils :</span> Eclipse, Netbeans, PHP Storm, Web Storm, Android studio, VSCode, PyCharm, IntelliJ, Office365, Photoshop, Insomnia, Postman, Discord, Slack, pgAdmin <span className="blink"></span> </p>
                            </div>
                        </div>
                            
                    </div> 
                </div>
                <div>
                    <div className="container__quality-title non-selectable">
                        <h2>Qualités :</h2>
                    </div>
                    <div className="container__quality-content non-selectable">
                        
                            {
                                quality.map((qual) => (
                                    <div className='flash qualityItem non-selectable' key={qual.name}>
                                        <div>
                                            <img  src={qual.logo} alt={ `${ qual.name }` } />
                                        </div>
                                        <div>
                                            <p>{qual.name}</p>
                                        </div>
                                    </div>
                                ))
                            }
                    </div>
                </div>
            </div>
        </>
        
        
    );
}

export default Skills;