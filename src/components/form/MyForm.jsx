import { useState } from "react";

let MyForm = () => {

    let [formData, setFormData] = useState({
        name:'',
        age:''
    })
    let handleFormInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    }

    let handleFormSubmit = e => {
        e.preventDefault();
        console.log(`Name is ${formData.name} and age is ${formData.age}`)
        const options = {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(formData)
        }
            fetch('http://localhost:4000', options)
            .then(response => {response.text(); setFormData({name:'', age:''})})
            .then(res => console.log(res))
    }
    return(
        <form action="" onSubmit={e => handleFormSubmit(e)}>
            <label>Name : </label>
            <input type="text" name="name" placeholder="type your name" value={formData.name} onChange={handleFormInputChange} />
            <br />
            <label>Age : </label>
            <input type="text" name="age" placeholder="type your age" value={formData.age} onChange={handleFormInputChange} />
            <br />
            <button type="submit" >Submit</button>
        </form>
    )
}

export default MyForm;