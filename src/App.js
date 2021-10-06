import React,{useState,useEffect} from 'react';
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import Header from "./components/Header";
import Form from "./components/Form";
import Todos from "./components/Todos";
// const img = 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'


const App = () => {
    const initialState = JSON.parse(localStorage.getItem('todos')) || []
    const [todos, setTodos] = useState(initialState);


    useEffect(()=> {
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])



    const addNewTodo = (input,img) => {
        const newTodo = {
            task:input,
            id: uuidv4(),
            completed: false,
            picture: img
        }
        setTodos([...todos,newTodo])

    }
    const toggleCompletion = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                return {
                    ...todo,
                    completed:!todo.completed
                }
            }else {
                return todo
            }
        }))
    }
    const removeTodo = (id) => {
        setTodos(todos.filter(todos => !todos.completed))
    }


    return (
        <div className={'container'}>

            <div className="app-wrapper">
                <div>
                    <Header/>
                </div>
                <div>
                    <Form addNewTodo={addNewTodo} />
                </div>
                <div>
                    <Todos todos={todos} toggleCompletion={toggleCompletion} removeTodo={removeTodo} />
                </div>
            </div>


        </div>
    );
};

export default App;
