import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = ({setProgress}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setProgress(20); // Set initial progress
        
    
        // Simulate form submission delay
        setTimeout(() => {
          setProgress(100); // Set progress to 100% when submission is complete
        }, 1000);
      };
   
  return (
    
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch with Us!</h2>
      <p className="contact-slogan">"Connecting People, Connecting the World"</p>
      <p className="contact-slogan">"Your Gateway to Reliable News"</p>

      <div className="contact-details">
        <h3>Our Address</h3>
        <p>InfiNews Headquarters</p>
        <p>123 News Avenue</p>
        <p>Suite 456</p>
        <p>Newscity, NY 12345</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@infinews.com</p>
      </div>

      <div className="contact-form">
        <h3>Contact Us</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
