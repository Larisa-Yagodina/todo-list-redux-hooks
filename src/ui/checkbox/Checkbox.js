import React from 'react';
import cl from './Checkbox.module.css'

const Checkbox = (props) => {
    const {
        checked,
        onChange,
    } = props;

    return (
        <input
            className={cl.myCheckbox}
            checked={checked}
            onChange={onChange}
            type="checkbox"
        />
    );
};

export default Checkbox;