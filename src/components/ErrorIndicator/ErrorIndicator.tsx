import React from 'react';

import './ErrorIndicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="Sosi COCK"/>
            <span className="boom">
                BOOM! U A NOOB!!!!
            </span>
            <span>
                something has gone terribly wrong, man
            </span>
            <span>
                (plz, stay quite, we a already came to u)
            </span>
        </div>
    );
};

export default ErrorIndicator;