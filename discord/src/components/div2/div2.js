import React from 'react';

import { FaUser, FaRocket } from 'react-icons/fa'

import './styles.css';

function Div2 () {
    return (
        <div className="div">
            <input placeholder="Find or start a conversation"></input>
            <div className="division"></div>
            <div className="select-button"><h4><FaUser className="icon"></FaUser>Friends</h4></div>
            <div className="select-button"><h4><FaRocket className="icon"></FaRocket>  Nitro</h4></div>
        </div>
    );
}

export default Div2