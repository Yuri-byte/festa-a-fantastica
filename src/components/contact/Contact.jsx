import React, { useRef } from 'react'
import './contact.css'
import {AiOutlineMail, AiOutlineWhatsApp} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'



const Contact = () => {
  const form = useRef();
  // const successMessage = document.querySelector('.success_text');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_80gg3oj', 'template_ianzg8q', form.current, 'WQK1rgcWXAcydoVke')
      .then((result) => {
        console.log(result.text);
        // successMessage.classList.add('show');
        e.target.reset()
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>yurischwab00@gmail.com</h5>
            <a href="mailto:yurischwab00@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>yuri.schwab</h5>
            <a href="https://m.me/yuri.schwab" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineWhatsApp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 (19) 99951-2143</h5>
            <a href="https://api.whatsapp.com/send?phone=19999512143" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="text" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        {/* <article className='success_text'>Message Sent</article> */}
      </div>
    </section>
  )
}

export default Contact