import React from 'react';

const Square = (props) => {
    const style = {
        width: '100px',
        height: '100px',
        display: 'inline-block',
        backgroundColor: props.color
    }
    
    return (
        <div>
            <p style={style}></p>
        </div>
    )
}

export default Square;