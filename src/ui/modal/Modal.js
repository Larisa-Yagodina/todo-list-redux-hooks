import React from 'react';
import cl from './Modal.module.css'
import {Portal} from "../portal/Portal";
import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../redux/actions";

const Modal = ({children}) => {

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modal.isOpen)
    const onClose = () => dispatch(closeModal())

    const preventCloseOnContent = (event) => {
        event.stopPropagation()
    }

    return (
        <Portal>
            <div
                className={isOpen ? cl.modal + ' ' + cl.active : cl.modal}
                onClick={onClose}
            >
                <div
                    className={isOpen ? cl.modal_content + ' ' + cl.active : cl.modal_content}
                    onClick={preventCloseOnContent}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};

export default Modal;
