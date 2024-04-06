import React from 'react';
import Modal from "../ui/modal/Modal";
import CreateTaskForm from "./modalForms/CreateTaskForm";
import DeleteTaskForm from "./modalForms/DeleteTaskForm";
import EditTaskForm from "./modalForms/EditTaskForm";
import {useSelector} from "react-redux";

export const MODAL_TYPES = {
    CREATE_MODAL: "CREATE_MODAL",
    DELETE_MODAL: "DELETE_MODAL",
    EDIT_MODAL: "UPDATE_MODAL",
};

const MODAL_COMPONENTS = {
    [MODAL_TYPES.CREATE_MODAL]: CreateTaskForm,
    [MODAL_TYPES.DELETE_MODAL]: DeleteTaskForm,
    [MODAL_TYPES.EDIT_MODAL]: EditTaskForm
};
const GlobalModal = () => {

   const modalType = useSelector(state => state.modal.modalType)

    const renderComponent = () => {

        const ModalComponent = MODAL_COMPONENTS[modalType];

        if (!modalType || !ModalComponent) {
            return null;
        }
        return <ModalComponent />;
    };

    return (
        <Modal>
            {renderComponent()}
        </Modal>
    );
};

export default GlobalModal;
