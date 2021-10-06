import React, { useState} from 'react';
import axios from "axios";


// HeP-jeLTSDRArzAHCgp8Ftkw5GEmMbRuuGpk9w9_W2U

// https://api.unsplash.com/
const Form = ({addNewTodo}) => {
    const[hover,setHover] = useState(false)

    const [inputValue, setInputValue] = useState({
        task:'',

    });

    const onHover =() => {
        setHover(!hover)
    }
    const handleChange = (e) => {
        const {name, value} = e.target
        setInputValue({...inputValue, [name]: value})

    }
// console.log('this is img on form page',img)
    const handleSubmit = (e) => {
        e.preventDefault()

        axios.get(`https://api.unsplash.com/search/photos?query=${inputValue.task}&client_id=HeP-jeLTSDRArzAHCgp8Ftkw5GEmMbRuuGpk9w9_W2U`)
            .then(response => {
            // console.log(response.data.results[0].urls.full)
                const photoUrl = response.data.results[0].urls.full
                addNewTodo(inputValue.task.trim(),photoUrl)

            })
        setInputValue({task: ''})

    }


    return (
        <form onSubmit={handleSubmit} >
            <input required name={'task'} type="text" placeholder={'Enter a todo ...'} className={'task-input'} value={inputValue.task} onChange={handleChange}/>
            <button onMouseEnter={onHover} onMouseLeave={onHover} className="button-add" type={'submit'}>{hover? 'Lets' : 'Add'}</button>
        </form>
    );
};

export default Form;
