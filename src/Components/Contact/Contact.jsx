import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import linkedin_icon from '../../assets/linkedin.jpeg'


const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0eb9e491-6f27-4779-92d7-fc287cc51402");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
    alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>Currently,I am searching for an internship at frontent role if you have any related opportunity please make me inform with the given below contact details, I'll make sure that you will never regret upon this. </p>

                <div className="contact-details">

                    <div className="contact-detail">
                       <img src={mail_icon} alt="" />
                       <p>cchiragg.27@gmail.com</p>
                    </div>

                    <div className="contact-detail">
                     <img src={linkedin_icon} height="32px" width="40px" />
                     <p>Chirag Singh</p>
                    </div>

                    <div className="contact-detail">
                      <img src={location_icon} alt="" />
                      <p>Faridabad(Haryana), INDIA</p>
                    </div>


                </div>



            </div>

           
         <form onSubmit={onSubmit} className='contact-right'>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />

            <label>Your Email</label>
            <input type="email" placeholder='Enter your email' name='email'/>

            <label htmlFor="">Enter your message here</label>
            <textarea name="message" rows='8' placeholder='Enter your message'></textarea>

            <button type="submit" className="contact-submit">Submit now</button>
         </form>

        </div>
    </div>
  )
}

export default Contact
