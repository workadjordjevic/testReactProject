import React from 'react';

const CalculatorButton = ({value, onButtonClick}) => {
    return (
        <button onClick={() => onButtonClick(value)} style={{border:"1px solid black", height:"100px", width:"100px" }}>
            {value}
        </button>
    );
};

export default CalculatorButton;