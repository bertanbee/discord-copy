import React from 'react';
import { FaPhone, FaVideo, FaThumbtack, FaPlus, FaSearch, FaInbox, FaQuestionCircle } from 'react-icons/fa';

import './styles.css';

function Header () {
    return (
        <div className="box-head">
            <div className="left-right"> 
                <div className="row">
                   <h3 id="arroba">@</h3>
                    <p id="name-top">Name</p>
                    <div className="activity"></div>
                </div>
                    
                <div className="row">
                    <div className="buttons">
                        <FaPhone className="icon-top"></FaPhone>
                        <FaVideo className="icon-top"></FaVideo>
                        <FaThumbtack className="icon-top"></FaThumbtack>
                        <FaPlus className="icon-top"></FaPlus>
                        <div className="search-box">
                            <input placeholder="Search"></input>
                            <FaSearch id="search-icon"></FaSearch>
                        </div>
                        <FaInbox className="icon-top"></FaInbox>       
                        <FaQuestionCircle className="icon-top"></FaQuestionCircle>                 
                    </div>
                </div> 
            </div>
            
        </div>
    );
}

export default Header;