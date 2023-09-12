import { useState } from "react";
import Header from "@/components/Header";
import styles from "@/styles/InputContainer.module.css"
import 'bootstrap/dist/css/bootstrap.css';

const Register = () => {

const [state,setState]=useState(
    {
        username:"",
        email:"",
        password:"",
        confirmPassword:"",
    }
);

const handleChange = (event) => {
    const{name,value} = event.target;
    setState((prevState)=>({
        ...prevState,
        [name]:value,
    }));
}

const handleSubmit = (event) => {
    event.preventDefault();
    if(state.username.trim() && state.email.trim() && state.password && state.confirmPassword){
        if(state.password !== state.confirmPassword){
            alert('Passwords do not match!')
        }
        else{
            alert('Registeration successfull!')
        setState({
            username:"",
            password:"",
            confirmPassword:"",
            email:"",
        })}
    }
   
    else {
        alert("All input fields required!")
    }
   
}

return(
    <>
        <Header>
            <h1>
                Register
            </h1>
        </Header>

        <form 
        style={{textAlign:"center"}}
        onSubmit={handleSubmit} 
        >
            
            <div className={styles.inputContainer}>
            <input
                name="username"
                type="text"
                placeholder="username"
                value={state.username}
                onChange={handleChange}
            />
            <input
                name="email"
                type="email"
                placeholder="email"
                value={state.email}
                onChange={handleChange}
            />
            <input
                name="password"
                type="password"
                placeholder="password"
                value={state.password}
                onChange={handleChange}
            />
            <input
                name="confirmPassword"
                type="password"
                placeholder="confirm password"
                value={state.confirmPassword}
                onChange={handleChange}
            />
            <button type="submit">
            Register
            </button>
            </div>
            
        </form>
    </>
)
};
export default Register;