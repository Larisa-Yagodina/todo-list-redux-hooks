import React from 'react';
import {useDispatch} from "react-redux";
import {changeTask} from "../api/todolistServices";
import Checkbox from "../ui/checkbox/Checkbox";
import Button, {ButtonTheme} from "../ui/button/Button";
import {openModal} from "../redux/actions";
import {MODAL_TYPES} from "./GlobalModal";


const TodoItem = ({task}) => {

    const dispatch = useDispatch();
    const onCheck = () => dispatch(changeTask({...task, isDone: !task.isDone}))
    const onEdit = () => {
        dispatch(openModal(task, MODAL_TYPES.EDIT_MODAL))
    }
    const onDelete = () => {
        dispatch(openModal(task, MODAL_TYPES.DELETE_MODAL))
    }
    return (
        <li style={{display: 'flex', alignItems: "center", justifyContent: "center", margin: '5px'}}>
            {task.name} {' '}

            <Checkbox
                checked={task.isDone}
                onChange={onCheck}
            />

            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onEdit}
            >
                Edit
            </Button>

            <Button
                theme={ButtonTheme.OUTLINE_DANGER}
                onClick={onDelete}
            >
                Delete
            </Button>

        </li>
    );
};

export default TodoItem;
