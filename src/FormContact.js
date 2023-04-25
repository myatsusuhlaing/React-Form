import React, { useState } from "react";
import "./App.css";

function FormContact(){
    const [firstname,setFirstName] = useState('');
    const [secname,setSecName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [error,setError] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validate();
        console.log(validationErrors)
        console.log(Object.keys(validationErrors));
        if (Object.keys(validationErrors).length === 0){
        alert ('Successfully!');
        setFirstName('');
        setSecName('');
        setEmail('');
        setMessage('');
        setError({});
    }else{
      setError (validationErrors);
    }
    };

    const validate = () =>{
        const validationErrors = {}
        if(!firstname.trim()){
          validationErrors.firstname = 'Name is Required!'
        }
        if(!secname.trim()){
            validationErrors.secname = 'Name is Required!'
        }
        if(!email.trim()){
            validationErrors.email = 'Email is Required!'
        }else if(!/\S+@\S+\.\S+/ .test(email)){
            validationErrors.email = 'Email is invalid!'
        }
        if(!message.trim()){
            validationErrors.message = 'Message is Required!'
        }
        return validationErrors;
    }


    return(
    <form className="form" onSubmit={handleSubmit}>
      <label>First Name</label>
        <input 
        type="text"
        placeholder="Type first name"
        value ={firstname}
        onChange={(event) => setFirstName(event.target.value)} 
        />
        <span>{error.firstname}</span>
      <label>Last Name</label>
        <input 
        type="text"
        placeholder="Type last name"
        value = {secname}
        onChange={(event) =>setSecName(event.target.value)}
        />
        <span>{error.secname}</span>
      <label>Email</label>
        <input 
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) =>setEmail(event.target.value)}
        />
        <span>{error.email}</span>
        <label>Message</label>
        <textarea 
        rows= "2"
        placeholder="Write message"
        value={message}
        onChange={(event) =>setMessage(event.target.value)}
        />
        <span>{error.message}</span>
      <button className="sendBtn" type="submit">Send</button>
    </form>
    )
}
export default FormContact;