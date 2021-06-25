import React from 'react';
import linkedin from '../../assets/images/linkedin.png';
import './footer.scss';

const Footer = () => (
        <footer className="footer">
            <div className="footer_contact">Contact</div>
            <div className="footer_email">celinedepauw2@gmail.com</div>
            <a href="https://www.linkedin.com/in/celinedepauw/" target="_blank" className="footer_linkedin_link"><img src={linkedin} className="footer_linkedin_logo" /></a>
        </footer>
);

export default Footer;