import React from 'react';
import email from '../../assets/images/email.svg';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';

import './footer.scss';

const Footer = () => (
        <footer className="footer">
            <div className="footer_email">
                <img src={email} className="footer_email_picture" />
                <a href="mailto:celinedepauw2@gmail.com" className="footer_email_text">celinedepauw2@gmail.com</a>
            </div>
            <a href="https://www.linkedin.com/in/celinedepauw/" target="_blank" className="footer_linkedin_link"><img src={linkedin} className="footer_linkedin_logo" /></a>
            <a href="https://github.com/celinedepauw" target="_blank" className="footer_github_link"><img src={github} className="footer_github_logo" /></a>
        </footer>
);

export default Footer;