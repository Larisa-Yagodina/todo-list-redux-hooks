import React from 'react';
import cl from './Button.module.css'

export const ButtonTheme = {
    CLEAR: 'clear',
    OUTLINE: 'outline',
    OUTLINE_DANGER: 'outline_danger',
}
const Button = (props) => {

    const {
        children,
        theme = '',
        disabled = false,
        onClick
    } = props;

    return (
        <button
        type='button'
        className={`${cl[theme]} ${cl.btn}`}
        disabled={disabled}
        onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;