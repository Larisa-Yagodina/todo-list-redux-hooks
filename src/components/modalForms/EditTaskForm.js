import React, {useState} from 'react';
import Input from "../../ui/input/Input";
import Button, {ButtonTheme} from "../../ui/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {changeTask} from "../../api/todolistServices";
import {closeModal} from "../../redux/actions";

const EditTaskForm = () => {

    const task = useSelector(state => state.modal.data)

    const [editedTask, setEditedTask] = useState(task);
    const onChange = (event) => {
        setEditedTask({...editedTask, name: event.target.value})
    }

    const dispatch = useDispatch();
    const onClose = () => dispatch(closeModal())
    const onEdit = () => {
        dispatch(changeTask(editedTask))
        setEditedTask(task)
        onClose(false)
    }

    return (
        <div>
            <Input
                value={editedTask.name}
                onChange={onChange}
                placeholder='Edit task name'
            />
            {' '}
            <Button
                onClick={onEdit}
                theme={ButtonTheme.OUTLINE}
            >Edit</Button>

            <Button
                onClick={onClose}
                theme={ButtonTheme.OUTLINE_DANGER}
            >Cancel</Button>
        </div>
    );
};

export default EditTaskForm;
