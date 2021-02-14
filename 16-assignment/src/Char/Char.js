import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center',
        backgroundColor: "rgb(" + (Math.floor(Math.random() * Math.floor(100)) + 180) + "," + (Math.floor(Math.random() * Math.floor(100)) + 180) + "," + (Math.floor(Math.random() * Math.floor(100)) + 180) + ")"
    };

    return (
        <div style={style} onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default char;