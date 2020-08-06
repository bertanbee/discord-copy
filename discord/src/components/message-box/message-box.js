import React from 'react';
import { FaPlusCircle, FaGift, FaStickyNote, FaSmile } from 'react-icons/fa';

import Msg from "./msg";

import './styles.css';

function Messagebox (props) {
    return (
        <div className="box-content">
            <div className="user-messages">
                <Msg msg="hi"></Msg>
                <Msg msg="hi yo"></Msg>
                <Msg msg="hi"></Msg>
                <Msg msg="hi"></Msg>
                <Msg msg="hi"></Msg>
                <Msg msg="hi"></Msg>
                <Msg msg="hi"></Msg>
                <Msg msg="hi"></Msg>
                <Msg msg="hi"></Msg>
                <Msg msg="hi"></Msg>
                <Msg msg="hi"></Msg>
                <Msg msg="hi"></Msg>
                <Msg msg="hi"></Msg>
                <Msg msg="hi"></Msg>
                <Msg msg="hi"></Msg>
                <Msg msg="hi"></Msg>
            
                
            </div>
            
            <div className="message-input">
                <div id="one" className="button-message-box"> 
                    <FaPlusCircle className="icon"></FaPlusCircle>
                </div>
                <input id="message-input-1" placeholder="Message @name"></input>
                <div className="button-message-box"> 
                    <FaGift className="icon"></FaGift>
                </div>
                <div className="button-message-box"> 
                    <FaStickyNote className="icon"></FaStickyNote>
                </div>
                <div id="two" className="button-message-box"> 
                    <FaSmile className="icon"></FaSmile>
                </div>
            </div>
        </div>
    );
}

export default Messagebox;