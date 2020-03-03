import React from 'react';

function Button({buttonText, buttonColor, onClick}) {


return <div class="inputButton" onClick={() => onClick()} style={{color: buttonColor}}>{buttonText}</div>;
}

export default Button;