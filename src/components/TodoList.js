import React, {useState} from 'react';

import {FaCheckSquare,} from "react-icons/fa";
import {BsTrash} from 'react-icons/bs'
import {FcPicture} from 'react-icons/fc'

const TodoList = ({todo, toggleCompletion, removeTodo}) => {
    const [toggle, setToggle] = useState(false);
    const handleCompleted = () => {
        toggleCompletion(todo.id)
    }
    const handleDelete = () => {
        removeTodo()
    }

    const showPicture = () => {
      setToggle(!toggle)
    }


    return (
        <div>
            <li style={{backgroundColor: todo.completed ? '#7d4986' : '#12343b'}} className="list-item">
                <input type="text" value={todo.task} className={todo.completed ? 'complete':'list'}
                       onChange={event => event.preventDefault()}/>

                <div>


                    <button onClick={handleCompleted} className={'button-complete task-button'}>
                        <i className={'fa fa-check-circle'}> <FaCheckSquare/></i>
                    </button>


                    <button onClick={handleDelete} className={'button-delete task-button'}>
                        <i className={'fa fa-trash'}><BsTrash/></i>
                    </button>
                    <button onClick={showPicture}  className={'button-edit task-button'}>
                        <i className={'fa fa-check-circle'}> <FcPicture/></i>
                    </button>
                </div>
            </li>
            {toggle? <div><img style={{width:'200px', height:'200px', opacity:todo.completed ? 0.5:1}} src={todo.picture} alt="Eiffel Tower"/></div>:null}

        </div>
    );
};

export default TodoList;
