import React from 'react';
import cl from './Input.module.css'

const Input = (props) => {
    const {
        placeholder,
        value,
        onChange,
    } = props;

    return (
        <input
            className={cl.myInput}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;