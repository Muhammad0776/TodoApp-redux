import React from 'react'
import { Button, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

const Todo = () => {
    const data = useSelector(state => state.tasks);
    const value = useSelector(state => state.value);

    const dispatch = useDispatch();

    const typing = (event) => {
        const action = { type: "TYPING", payload: event.target.value };
        dispatch(action);
    }

    const add = () => {
        if (value.trim() === "") {
            alert("Please write task");
            return;
        }

        const action = { type: "ADD_TASK", payload: value };
        dispatch(action);
    }

    const deleteTask = (index) => {
        const action = { type: "DELETE_TASK", payload: index };
        dispatch(action);
    }

    return (
        <div className="container py-5 mt-5">
            <div className="bg-warning rounded p-3 shadow">
                <h1>Todo App</h1>

                <div className="d-flex mb-2">
                    <Input onChange={typing} value={value} placeholder="new task" className="me-2" />
                    <Button color="primary" onClick={add} >
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </div>
                <ListGroup>
                    {data?.map((value, index) => {
                        return (
                            <ListGroupItem key={index} tag="a" href="#" action
                                className="d-flex align-items-center justify-content-between">

                                <span>{index + 1}. {value.title}</span>

                                <div>
                                    <Button color="success" className="me-3">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </Button>

                                    <Button onClick={() => deleteTask(index)} color="danger">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </div>

                            </ListGroupItem>
                        )
                    })}
                </ListGroup>
            </div>

        </div>
    )

}

export default Todo;
