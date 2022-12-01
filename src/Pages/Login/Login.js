import React, { useState } from "react";
import SignIn from "../../Components/Login/SignIn";
import "./Login.css";
export const Login = () => {
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');

    const handleChange = e =>{
         if(e.target.id === 'email'){
            const {name,value} = e.target
            // console.log(name , value)
            setEmail(value )
        }
        if(e.target.id === 'password'){
            const {name,value} = e.target
            // console.log(name , value)
            setPassword(value  ) 
        }
    }
    const handleOnSubmit = e =>{
        e.preventDefault();
        if(e.target.id === 'email'){
            const {name,value} = e.target
            console.log(name , value)
            setEmail(value )
        }
        if(e.target.id === 'password'){
            const {name,value} = e.target
            console.log(name , value)
            setPassword(value  ) 
        }
        if(!email || !password){
            console.log('please enter something')
        }
        console.log('email  '+email,'pass  '+password)
    }
  return (
    <div>
      <SignIn handle= {handleChange}
      handleSubmit ={handleOnSubmit}
      email = {email}
      password = {password}/>
    </div>
  );
};

export default Login;
