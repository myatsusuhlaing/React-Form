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
    <div className="p-7 md:w-6/12 bg-emerald-600 ">
      <h2 className="text-center text-rose-100 font-bold font-mono text-3xl">React Form</h2>
    <form className="bg-emerald-600 py-3 px-3 flex flex-col" onSubmit={handleSubmit}>
      <label className="text-left px-1 text-rose-100 font-bold font-mono text-lg">
          First Name
      </label>
      <input 
        className="bg-neutral-300 outline-none w-full placeholder:italic rounded px-3 py-[0.32rem]"
        id="exampleFormControlInput1"
        type="text"
        placeholder="Your First Name"
        value ={firstname}
        onChange={(event) => setFirstName(event.target.value)} 
      />
        <span className="text-left px-1 text-rose-800 pb-5">{error.firstname}</span>
      <label className="text-left px-1 text-rose-100 font-bold font-mono text-lg">Last Name</label>
        <input 
        className="bg-neutral-300 outline-none w-full placeholder:italic rounded px-3 py-[0.32rem]"
        type="text"
        placeholder="Your last name"
        value = {secname}
        onChange={(event) =>setSecName(event.target.value)}
        />
        <span className="text-left px-1 text-rose-800 pb-5">{error.secname}</span>
      <label className="text-left px-1 text-rose-100 font-bold font-mono text-lg">Email</label>
        <input 
        className="bg-neutral-300 outline-none w-full placeholder:italic rounded px-3 py-[0.32rem]"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) =>setEmail(event.target.value)}
        />
        <span className="text-left px-1 text-rose-800 pb-5">{error.email}</span>
      <label className="text-left px-1 text-rose-100 font-bold font-mono text-lg">Message</label>
        <textarea 
        className="bg-neutral-300 outline-none w-full placeholder:italic rounded px-3 py-[0.32rem]"
        rows= "2"
        placeholder="Write message"
        value={message}
        onChange={(event) =>setMessage(event.target.value)}
        />
        <span className="text-left px-1 text-rose-800 pb-5">{error.message}</span>
      <button 
        className="sendBtn flex rounded bg-green-700 px-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-200 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">
        <span className="mx-auto">Send</span>
        {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 ">
        <path
          d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg> */}
      </button>
    </form>
    </div>
    )
}
export default FormContact;