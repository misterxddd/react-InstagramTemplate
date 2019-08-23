import React from 'react';

import './Button.css';

type ButtonProps = {
  types: string;
  onClick: (arg0: any) => any;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
    const {types, onClick, disabled, children} = props; 
    // types are 'btn-success' and 'btn-info'
    const cls = [
        'btn',
        types,
        'button'
    ];

    return (
        <button 
            onClick={onClick}
            className={cls.join(' ')}
            disabled={disabled}>
            {children}
        </button>
    )
};

export default Button;