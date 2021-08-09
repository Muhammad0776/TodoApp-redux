import { AiFillSave, AiOutlinePlus } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { GrCompliance, GrEdit } from "react-icons/gr";
import React from 'react'
import { Button, Input, } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import TodoWrapper, { blue, green } from './TodoWrapper';



const TodoRedux = (props) => {

    const data = useSelector(state => state)
    const todos = data.tasks;
    const value = data.value
    const editingType = data.editingType

    const dispatch = useDispatch()

    const typing = (e) => {
        const action = {
            type: "TYPING",
            payload: e.target.value
        }
        dispatch(action)
    }


    const add = (e) => {
        e.preventDefault()
        if (value === "") {
            alert('Please write a task')
        } else {

            const action = {
                type: "ADD_TASK",
                payload: value
            }
            dispatch(action)
        }

    }
    const deleteTask = (index) => {
        const action = {
            type: "DELETE_TASK",
            payload: index
        }
        dispatch(action)
    }

    const setComplete = (index) => {
        const action = {
            type: "COMPLETE",
            payload: index
        }
        dispatch(action)
    }


    // editing
    const startEditing = (index) => {
        if (editingType) {
            return
        } else {
            const action = {
                type: "START_EDITING",
                payload: index
            }
            dispatch(action)
        }


    }
    const editItem = (e) => {
        const action = {
            type: "EDIT",
            payload: e.target.value
        }
        dispatch(action)
    }

    const setEdited = (index) => {
        const action = {
            type: "SET_NEW_VALUE",
            payload: index
        }
        dispatch(action)
        return
    }


    // editing

    const deleteAll = () => {
        const action = {
            type: "DELETE_ALL"
        }
        dispatch(action)
    }

    const deleteCompleted = () => {
        const action = {
            type: "DELETE_COMPLETED"
        }
        dispatch(action)
    }

    let completed = 0
    let uncompleted = 0

    return (
        <TodoWrapper>
            <h2 className="title" >Todo App</h2>

            <form className="d-flex align-items-center  mb-3 w-100" onSubmit={add}>
                <Input
                    type="text"
                    placeholder="New Task"
                    className="me-2"
                    value={value}
                    onChange={typing}
                />

                <Button
                    className="float-right bg-primary"
                >
                    <AiOutlinePlus color="white" fontWeight="600" fontSize="1.5rem" />
                </Button>
            </form>

            <ListGroup>
                {
                    todos?.map((item, index) => {

                        if (item.complete) {
                            completed++
                        } else uncompleted++

                        return <ListGroupItem className="my-1 w-100 d-flex flex-wrap text-center align-items-center justify-content-between" key={index}>

                            {
                                item.editing ?
                                    <form onSubmit={() => setEdited(index)} className="w-100 d-flex align-items-center justify-content-between">
                                        <Input
                                            type="text"
                                            value={editingType}
                                            onChange={editItem}
                                        />
                                        <Button
                                            color="primary"
                                            className="float-right"
                                        >
                                            <AiFillSave />
                                        </Button>
                                    </form>
                                    :

                                    <>
                                        <p style={{
                                            textDecoration: item.complete ? "line-through" : "none",
                                            color: item.complete ? "red" : "#111",

                                        }} className="todo-title" >{index + 1}.  {item.title}</p>

                                        <div className="wrapperHoverBtn d-flex justify-content-between align-items-center" >

                                            <Button className="me-3 iconColor" onClick={() => startEditing(index)} color="success">
                                                <GrEdit />
                                            </Button>

                                            <Button className={`hoverbtn me-3 iconColor ${item.complete ? 'fill' : 'none'}`} onClick={() => setComplete(index)} color="primary">
                                                <GrCompliance />
                                            </Button>

                                            <Button onClick={() => deleteTask(index)} color="danger">
                                                <BsTrash />
                                            </Button>

                                        </div>
                                    </>
                            }


                        </ListGroupItem>
                    })
                }

                <ListGroupItem className="glassMor2 mb-2 mt-1">
                    <div className="d-flex justify-content-between">
                        <div>
                            <p>Completed: {completed}</p>
                            <p className="mb-0">Uncompleted: {uncompleted}</p>
                        </div>
                        <div className="d-flex justify-content-center align-items-center" onClick={deleteCompleted} >
                            <Button className="btn btn-warning">Delete Completed</Button>
                        </div>
                    </div>
                </ListGroupItem>

                <ListGroupItem className="glassMor" onClick={deleteAll}>

                    <div className="d-flex justify-content-between">
                        <p className="mb-0 pt-1">All Tasks: {todos?.length}</p>
                        <div onClick={deleteAll}>
                            <Button className="btn btn-danger">Delete All</Button>
                        </div>
                    </div>
                </ListGroupItem>

            </ListGroup>


        </TodoWrapper>
    )

}
export default TodoRedux