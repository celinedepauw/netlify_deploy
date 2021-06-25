import React from 'react';
import { Link } from 'react-router-dom';
import profile from '../../assets/images/celine.png';

import './header.scss';

const Header = () => (
        <header className="header">
            <Link to="/" className="header_return_link">
                <img src={profile} alt="profil" className="header_picture" />
                <h1 className="header_name">Céline Depauw</h1>
                <div className="header_job">Développeuse Web et Web Mobile</div>
            </Link>
        </header>
);

export default Header;