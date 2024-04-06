import React from 'react';
import Button, {ButtonTheme} from "../../ui/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {deleteTask} from "../../api/todolistServices";
import {closeModal} from "../../redux/actions";

const DeleteTaskForm = () => {

    const task = useSelector(state => state.modal.data)
    const dispatch = useDispatch();
    const onClose = () => dispatch(closeModal())

    const onCancel = () => {
        onClose()
    }
    const onDelete = () => {
        dispatch(deleteTask(task._id))
        onClose()
    }
    return (
        <div>
            <h3>Delete this task?</h3>
            <h4>«{task?.name}»</h4>

            <Button
                onClick={onDelete}
                theme={ButtonTheme.OUTLINE}
            >Delete</Button>

            <Button
                theme={ButtonTheme.OUTLINE_DANGER}
                onClick={onCancel}
            >Cancel</Button>
        </div>
    );
};

export default DeleteTaskForm;
