import React from 'react';

import './msg-styles.css';

function Msg (props) {
    return (
    <>   
    <div className="msg-box-text">
    <div className="pic">
    </div>
    <p className="user-s-message">{props.msg}</p>
    </div>
    
    </>
    );
};

export default Msg;