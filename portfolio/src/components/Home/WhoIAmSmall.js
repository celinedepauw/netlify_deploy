import React from 'react';
import { Link } from 'react-router-dom';

import bonus from '../../assets/images/bonus.svg';

const WhoIAmSmall = () => (
    <div className="whoIAmSmall">
        <div className="whoIAmSmall_title">
        <h3 className="whoIAmSmall_title_text">Bonus</h3>
        <img src={bonus} alt="bonus" className="whoIAmSmall_title_picture" />
        </div>    
        <p className="whoIAmSmall_intro">Vous voulez en savoir un peu plus sur moi ? On a sûrement des choses en commun !</p>
        <p className="whoIAmSmall_link"><Link to="/qui_suis_je" >C'est par ici !</Link></p>
    </div>
);

export default WhoIAmSmall;