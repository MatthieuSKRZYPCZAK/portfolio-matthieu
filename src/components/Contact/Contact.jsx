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


    return (

        <>  
            <div className="container">
                <div className="contact-mobile">
                    <p>Vous pouvez me contacter sur mes différents réseaux en cliquant sur un des liens ci-dessous<span className="blink"></span> </p>
                </div>                 
                
            </div>
        </>
        
    );
}

export default Contact;