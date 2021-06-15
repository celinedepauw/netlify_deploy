import React from 'react';
import { Link } from 'react-router-dom';

const WhoIAmSmall = () => (
    <div className="whoIAmSmall">
        <h3 className="whoIAmSmall_title">Bonus</h3>
        <p className="whoIAmSmall_intro">Vous voulez en savoir un peu plus sur moi ? On a sûrement des choses en commun !</p>
        <p className="whoIAmSmall_link"><Link to="/qui_suis_je" >C'est par ici !</Link></p>
    </div>
);

export default WhoIAmSmall;