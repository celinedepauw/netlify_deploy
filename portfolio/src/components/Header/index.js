import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/images/profile.png';

import './header.scss';

const Header = () => (
        <header className="header">
            <Link to="/" className="header_return_link">
                <h1 className="header_name">Céline Depauw <img src={profile} className="header_picture" /></h1>
                <div className="header_job">Product Owner</div>
            </Link>
        </header>
);

export default Header;