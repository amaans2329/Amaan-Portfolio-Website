import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm('service_qircsev', 'template_qs9mp1f', form.current, 'TWztSkDtmV73wVFu7')
      .then(res => {
        console.log(res);
        setIsFormSubmitted(true);
      })
      .catch(err => console.log(err));
  };

  return (
    <div id='Contact'>
      <h2 className="about-me">
        <span>Take a coffee &</span>
        <span>chat with Me</span>
      </h2>
    
      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <EmailIcon/>
          <a href="mailto:shaikhamaan2329@gmail.com" className="p-text">shaikhamaan2329@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <CallIcon/>
          <a href="tel:+91 7038240786" className="p-text">+91 7038240786</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form ref={form} onSubmit={sendEmail} className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <input className="button btn" type="submit" value={!loading ? 'Send Message' : 'Sending...'} />
        </form>
      ) : (
        <div>
          <h3 className="about-me">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </div>
  );
};
export default Contact;