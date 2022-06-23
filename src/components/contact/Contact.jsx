import React, { useRef } from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();
    
    const sendEmail = e => {
        e.preventDefault();
        emailjs.sendForm('service_t9xb3in', 'template_taq422d', form.current, '4NukkK77DiR-2jJoR');

        e.target.reset();
    }

    return (
        <section id="contact" className='container'>
            <div
                className="work__heading"
                data-aos="fade-right"
            >
                <h1 className='section-title'><span className='accent'>~</span>/contact</h1>
                <h3>Me contacter</h3>
            </div>

            <div className="contact__container">
                <div
                    className="contact__options"
                    data-aos="fade-right"
                >
                    <article className="contact__option">
                        <HiOutlineMail className='contact__icon' />
                        <h4>Email</h4>
                        <h5>charles.thms77@gmail.com</h5>
                        <a href="mailto:charlles.thms77@gmail.com">Envoyer un message</a>
                    </article>
                </div>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <input type="text" name='name' placeholder='Votre nom' required />
                    <input type="email" name="email" placeholder='Votre email' required />
                    <textarea name="message" rows="7" placeholder='Votre message' required></textarea>
                    <button type='submit' className='btn'>Envoyer</button>
                </form>
            </div>

        </section>
    )
}

export default Contact