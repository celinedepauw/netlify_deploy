import React from 'react';
import { Link } from 'react-router-dom';

const WhoIAmSmall = () => (
    <div className="whoIAmSmall">
        <h3 className="whoIAmSmall_title">Qui suis-je ?</h3>
        <p className="whoIAmSmall_intro">Je suis sûre que vous vous posiez la question ! On a sûrement plein de choses en commun !</p>
        <p className="whoIAmSmall_link"><Link to="/qui_suis_je" >C'est par ici !</Link></p>
    </div>
);

export default WhoIAmSmall;