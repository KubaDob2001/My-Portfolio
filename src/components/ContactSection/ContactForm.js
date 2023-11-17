import "./ContactFormStyles.css";

import React from 'react';

const ContactForm = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="text"></input>
            <label>Subcjet</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows={6} placeholder="Type Your Message Here"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm
