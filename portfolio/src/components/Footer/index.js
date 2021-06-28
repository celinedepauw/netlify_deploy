import React from 'react';
import email from '../../assets/images/email.svg';
import linkedin from '../../assets/images/linkedin.png';
import './footer.scss';

const Footer = () => (
        <footer className="footer">
            <div className="footer_contact">Contact</div>
            <div className="footer_email">
                <img src={email} className="footer_email_picture" />
                <div className="footer_email_text">celinedepauw2@gmail.com</div>
            </div>
            <a href="https://www.linkedin.com/in/celinedepauw/" target="_blank" className="footer_linkedin_link"><img src={linkedin} className="footer_linkedin_logo" /></a>
        </footer>
);

export default Footer;