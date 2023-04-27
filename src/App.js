import React from "react";
import "./App.css";
import "./input.css";
import FormContact from "./FormContact";


function App(){
  return(
    <div className="h-screen flex items-center justify-center  bg-gradient-to-r from-purple-500 to-pink-500">
    {/* // <div className="h-screen flex items-center justify-center bg-bg-1 bg-cover bg-no-repeat"> */}
      <FormContact/>
    </div>
  )
}
export default App;