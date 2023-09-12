import { useState } from "react";
import Header from "@/components/Header";
import styles from '@/styles/InputContainer.module.css'
import { useAuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const Login = () => {
    const[state , setState] = useState({
        username:"" ,
        password:"" 
        
    });
    const {login} = useAuthContext();
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(state.username.trim() === "" || state.password == ""){
            alert("Username or Password can not be empty")
            return;
        }
        else{
            login(state.username);
            setState({
                username:"",
                password:""
            })
            navigate('/', {replace:true});
        }
        
    };
    return (
        <div>

      <Header>
        <h1>Login</h1>
      </Header>
        <form 
            style={{textAlign:"center"}}
            onSubmit={handleSubmit}
        >
            <div className={styles.inputContainer}>
            <input
                name="username"
                placeholder="username"
                type="text"
                value={state.username}
                onChange={handleChange}
            />
            
            <input 
                name="password"
                placeholder="password"
                type="text"
                value={state.password}
                onChange={handleChange}
            />
            
            <button type="submit">
                Login
            </button>

            </div>
        </form>
        
    

        </div>
    )
};

export default Login;