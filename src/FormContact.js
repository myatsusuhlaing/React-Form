import React, { useState } from "react";
import "./App.css";

function FormContact() {
  const [firstname, setFirstName] = useState("");
  const [secname, setSecName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({});
  const [ showAlert, setShowAlert] = useState(false);
  const [showForm, setShowForm] = useState(true);


  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    console.log(validationErrors);
    console.log(Object.keys(validationErrors));
    if (Object.keys(validationErrors).length === 0) {
      // alert("Successfully!");
      setShowAlert(true);
      setShowForm(false);
      setFirstName("");
      setSecName("");
      setEmail("");
      setMessage("");
      setError({});
    } else {
      console.log("pass");
      setError(validationErrors);
    }
  };

  const validate = () => {
    const validationErrors = {};
    if (!firstname) {
      validationErrors.firstname = "Name is Required!";
    }
    if (!secname.trim()) {
      validationErrors.secname = "Name is Required!";
    }
    if (!email.trim()) {
      validationErrors.email = "Email is Required!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid!";
    }
    if (!message.trim()) {
      validationErrors.message = "Message is Required!";
    }
    return validationErrors;
  };

  function handleRedirect() {
    setShowForm(!showForm);
  }

  return (
    <div className="p-7 md:w-6/12 bg-emerald-600 shadow-lg hover:shadow-purple-900  rounded">
      
      {showAlert && !showForm && (
        <div className="alert alert-success text-center" role="alert" >
          <p className="text-rose-100 font-bold font-mono md:text-2xl text-center">
            Form submitted successfully!
          </p>
          <div className="pt-5">
            <button onClick={handleRedirect} className="mx-auto sendBtn hover:bg-green-800 group-focus:bg-purple-900 transform hover:scale-105 motion-reduce:transform-none flex rounded bg-green-700 px-3 pb-3 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-200 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">
              back
            </button>
          </div>
        </div>
      )}
      
      {showForm &&(
      <>
      <h2 className="text-center text-rose-100 font-bold font-mono text-3xl ">
        React Form
      </h2>
      <form
        className="bg-emerald-600 py-5 px-3 flex flex-col space-y-10"
        onSubmit={handleSubmit}
      >

        <div className="group relative">
          <input
            type="text"
            required
            id="username1"
            className="w-full peer bg-gray-200 outline-none bg-neutral-300 outline-none w-full focus:ring-2 focus:ring-purple-600 placeholder:italic rounded px-3 py-[0.35rem]"
            value={firstname}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <label
            for="username1"
            class="text-left top-0 left-0 pt-1 text-rose-400 font-bold font-mono text-lg transform transition-all absolute flex items-center pl-2 group-focus-within:text-xl peer-valid:text-xl group-focus-within:h-1 peer-valid:h-1 group-focus-within:-translate-y-4 peer-valid:-translate-y-4 group-focus-within:pl-0 peer-valid:pl-0"
          >
            First Name
          </label>
          <span className="text-left px-1 text-rose-800 pb-5">
            {error.firstname}
          </span>
        </div>

        <div className="group relative">
          <input
            type="text"
            required
            id="username2"
            className="w-full peer bg-gray-200 outline-none bg-neutral-300  focus:ring-2 focus:ring-purple-600 placeholder:italic rounded px-3 py-[0.35rem]"
            value={secname}
            onChange={(event) => setSecName(event.target.value)}
          />
          <label
            for="username2"
            className="text-left top-0 left-0 pt-1 text-rose-400 font-bold font-mono text-lg transform transition-all absolute flex items-center pl-2 group-focus-within:text-xl peer-valid:text-xl group-focus-within:h-1 peer-valid:h-1 group-focus-within:-translate-y-4 peer-valid:-translate-y-4 group-focus-within:pl-0 peer-valid:pl-0"
          >
            Second Name
          </label>
          {error.secname && 
            <span className="text-left px-1 text-rose-800 pb-5">
              {error.secname}
            </span>
          }
        </div>

        <div className="group relative">
          <input
            type="mail"
            required
            id="email"
            className="w-full peer bg-gray-200 outline-none bg-neutral-300 focus:ring-2 focus:ring-purple-600 placeholder:italic rounded px-3 py-[0.35rem]"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label
            for="email"
            className="text-left top-0 left-0 pt-1 text-rose-400 font-bold font-mono text-lg transform transition-all absolute flex items-center pl-2 group-focus-within:text-xl peer-valid:text-xl group-focus-within:h-1 peer-valid:h-1 group-focus-within:-translate-y-4 peer-valid:-translate-y-4 group-focus-within:pl-0 peer-valid:pl-0"
          >
            Email
          </label>
          <span className="text-left px-1 text-rose-800 pb-5">
            {error.email}
          </span>
        </div>

        <div className="group relative">
          <textarea
            required
            type="message"
            id="text"
            className="w-full peer bg-gray-200 outline-none bg-neutral-300 outline-none w-full focus:ring-2 focus:ring-purple-600 placeholder:italic rounded px-3 py-[0.35rem]"
            rows="2"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <label
            for="text"
            class="text-left top-0 left-0 pt-1 text-rose-400 font-bold font-mono text-lg transform transition-all absolute flex items-center pl-2 group-focus-within:text-xl peer-valid:text-xl group-focus-within:h-1 peer-valid:h-1 group-focus-within:-translate-y-4 peer-valid:-translate-y-4 group-focus-within:pl-0 peer-valid:pl-0"
          >
            Message
          </label>
          <span className="text-left px-1 text-rose-800 pb-5">
            {error.message}
          </span>
        </div>

        <button type="submit" className="sendBtn hover:bg-green-800 group-focus:bg-purple-900 transform hover:scale-105 motion-reduce:transform-none flex rounded bg-green-700 px-3 pb-3 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-200 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">
          <span className="mx-auto">Send</span>
        </button>
      </form>
      </>
      )}

    </div>
  );
}
export default FormContact;
