import React from 'react';

import { FaUser, FaRocket, FaPlus, FaTimes, FaMicrophone, FaHeadphones, FaCog } from 'react-icons/fa'

import './styles.css';

function Div2 () {
    return (
        <div className="div">
            <input placeholder="Find or start a conversation"></input>
            <div className="division"></div>
            <div className="select-button"><h4><FaUser className="icon"></FaUser>Friends</h4></div>
            <div className="select-button"><h4><FaRocket className="icon"></FaRocket>  Nitro</h4></div>
            <div className="direct-messages">
                <h4>Direct Messages<FaPlus className="icon-small"></FaPlus></h4>
                <div className="person">
                    <div className="profile-picture">
                        <div className="activity"></div>
                    </div>
                    <div className="space-between">
                        <h4>Name</h4>
                        <FaTimes className="close-icon"></FaTimes>
                    </div>
                </div>
                <div className="person">
                    <div className="profile-picture">
                        <div className="activity"></div>
                    </div>
                        <div className="space-between">
                            <h4>Name</h4>
                            <FaTimes className="close-icon"></FaTimes>
                    </div>
                </div>
                <div className="person">
                    <div className="profile-picture">
                        <div className="activity"></div>
                    </div>
                    <div className="space-between">
                        <h4>Name</h4>
                        <FaTimes className="close-icon"></FaTimes>
                    </div>
                </div>
                <div className="person">
                    <div className="profile-picture">
                         <div className="activity"></div>
                    </div>
                    <div className="space-between">
                        <h4>Name</h4>
                        <FaTimes className="close-icon"></FaTimes>
                    </div>
                </div>
                <div className="person">
                    <div className="profile-picture">
                        <div className="activity"></div>
                    </div>
                    <div className="space-between">
                        <h4>Name</h4>
                        <FaTimes className="close-icon"></FaTimes>
                    </div>
                </div>
                <div className="person">
                    <div className="profile-picture">
                        <div className="activity"></div>
                    </div>
                    <div className="space-between">
                        <h4>Name</h4>
                        <FaTimes className="close-icon"></FaTimes>
                    </div>
                </div>
                <div className="person">
                    <div className="profile-picture">
                        <div className="activity"></div>
                    </div>
                    <div className="space-between">
                        <h4>Name</h4>
                        <FaTimes className="close-icon"></FaTimes>
                    </div>
                </div>
                <div className="person">
                    <div className="profile-picture">
                        <div className="activity"></div>
                    </div>
                    <div className="space-between">
                        <h4>Name</h4>
                        <FaTimes className="close-icon"></FaTimes>
                    </div>
                </div>
                <div className="person">
                    <div className="profile-picture">
                        <div className="activity"></div>
                    </div>
                    <div className="space-between">
                        <h4>Name</h4>
                        <FaTimes className="close-icon"></FaTimes>
                    </div>
                </div>
                <div className="person">
                    <div className="profile-picture">
                        <div className="activity"></div>
                    </div>
                    <div className="space-between">
                        <h4>Name</h4>
                        <FaTimes className="close-icon"></FaTimes>
                    </div>
                </div>
            </div>
            <div className="user">
                <div className="profile-picture">
                    <div className="activity"></div>
                </div>
                <div className="name">
                    <div className="username">
                        <h4>Name</h4>
                        <p>#0000</p>
                    </div>
                    <div className="buttons">
                        <FaMicrophone className="icon-user"></FaMicrophone>
                        <FaHeadphones className="icon-user"></FaHeadphones>
                        <FaCog className="icon-user"></FaCog>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Div2;