import { Field, Form, Formik } from "formik";
import "./contact.css";
import { useId, useState } from "react";
import * as Yup from 'yup';
import emailjs from 'emailjs-com';


const Contact = () => {

    const id = useId();

    const [ sendEmail, setIsSendEmail ] = useState(false);

    const contactFormSchema = Yup.object().shape({
        nom: Yup.string().required('Ce champs est requis !'),
        email: Yup.string().email('Format d\'email invalide!').required('Ce champs est requis !'),
        message: Yup.string().max(100, 'Message trop long ! N\'hésitez pas à mon contacter par mail').required('Ce champs est requis !'),
    });
    const handleSubmitForm = (values, { resetForm }) => {
        console.log(values)
        const { nom, email, message } = values;
        const serviceID = 'service_dtswngc';
        const templateID = 'template_zj51vnu';
        const userID = '-oLMlT-Vfduak6NQU';

        emailjs.send(serviceID, templateID, { nom, email, message }, userID)
            .then((response) => {
                console.log('E-mail envoyé avec succès', response.text);
                setIsSendEmail(true);
                resetForm();
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi de l\'e-mail', error);
            });
    };


    return (

        <>  
            <div className="container">
                {/* <div className="contact-me">
                    <p>Vous pouvez me contacter sur mes différents réseaux ou en remplissant le formulaire ci-dessous<span className="blink"></span> </p>
                </div> */}
                {/* <div className="contact-mobile">
                    <p>Vous pouvez me contacter sur mes différents réseaux en cliquant sur un des liens ci-dessous<span className="blink"></span> </p>
                </div>                 */}
                <Formik
                    initialValues={{
                        nom: '',
                        email: '',
                        message:''
                    }}
                    onSubmit={ handleSubmitForm }
                    validationSchema={ contactFormSchema }
                >
                    {
                        ({ errors, touched }) => (
                            <Form className="my-form non-selectable">
                                <div className="label1">
                                    <label htmlFor={`${id}-nom`}>Votre Nom : </label>
                                    <Field  className="field" type='text' id={`${id}-nom`} placeholder='Ex: John' name='nom' />
                                    { errors.nom && touched.nom && <p style={{ color: 'red'}}>{ errors.nom }</p> }
                                    
                                </div>
                                <div className="label1">
                                <label htmlFor={`${id}-email`}>Votre adresse e-mail : </label>
                                    <Field  className="field" type='text' id={`${id}-email`} placeholder='example@example.com' name='email' />
                                    { errors.email && touched.email && <p style={{ color: 'red'}}>{ errors.email }</p> }
                                    
                                </div>
                                <div className="label1">
                                    <label htmlFor={`${id}-message`}>Votre Message : </label>
                                    <Field  className="field" component='textarea' id={`${id}-message`} placeholder='Ecrivez votre message ici...' name='message'/>
                                    { errors.message && touched.message && <p style={{ color: 'red'}}>{ errors.message }</p> }
                                    { sendEmail && <p className="lastError" style={{ color: 'green'}}>E-mail envoyé avec succès</p> }
                                </div>
                                <div className="submitButton">
                                    <button type="submit">Envoie</button>
                                </div>
                            </Form>
                        )
                    } 
                </Formik>
            </div>
        </>
        
    );
}

export default Contact;