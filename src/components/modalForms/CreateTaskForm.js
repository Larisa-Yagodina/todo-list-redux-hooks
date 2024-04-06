import React, {useState} from 'react';
import Input from "../../ui/input/Input";
import Button, {ButtonTheme} from "../../ui/button/Button";
import {useDispatch} from "react-redux";
import {postTask} from "../../api/todolistServices";
import {closeModal} from "../../redux/actions";

const CreateTaskForm = () => {

    const [taskName, setTaskName] = useState('')
    const dispatch = useDispatch();

    const onClose = () => dispatch(closeModal())

    const onChange = (event) => {
        setTaskName(event.target.value)
    }

    const onCreate = () => {
        dispatch(postTask({name: taskName, isDone: false}))
        setTaskName('')
        onClose(false)
    }

    return (
        <div>
            <h3>Create task form</h3>
            <Input
                value={taskName}
                onChange={onChange}
                placeholder='New task'
            />
            {' '}
            <Button
                onClick={onCreate}
                theme={ButtonTheme.OUTLINE}
            >Create</Button>

            <Button
                onClick={onClose}
                theme={ButtonTheme.OUTLINE_DANGER}
            >Cancel</Button>

        </div>
    );
};

export default CreateTaskForm;
