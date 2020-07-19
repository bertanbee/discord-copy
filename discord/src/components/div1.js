import React from 'react';
import './styles.css';
import logo from '../discord-logo.png' ;

function Div1 () {
    return (
        <>
        <div className="bar">
            <div id="logo-box">
                <img id="logo" src={logo} alt="logo"></img>
            </div>
            <div className="divisor">
            <div className="server"><h3>S</h3></div>
            <div className="server"><h3>J</h3></div>
            <div className="server"><h3>L</h3></div>
            <div className="server"><h3>N</h3></div>
            <div className="server"><h3>K</h3></div>
            <div className="server"><h3>Q</h3></div>
            <div className="server"><h3>A</h3></div>
            <div className="server"><h3>H</h3></div>
            <div className="server"><h3>L</h3></div>
        </div>
        </div>
        
        </>
    );
}

export default Div1;