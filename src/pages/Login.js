import "../styles/Login.css";
import {useState} from "react";
import MemberDashboard from "./MemberDashboard.js";
import TrainerDashboard from "./TrainerDashboard.js";

function Login(){
    const[formData,setFormData] = useState({
        email: "",
        password: ""
    });

    const[isLoggedIn,setIsLoggedIn] = useState(false);

    function handleChange(event){
        const{ name,value} = event.target;

        setFormData({
            ...formData,
            [name]:value
        });
    }

    function handleLogin(){
        if (formData.email === "" || formData.password === ""){
            alert("Please enter email and password");
        }
        else if(formData.email==="admin@gmail.com" && formData.password === "admin@123"){
            alert("Login successful");
            setIsLoggedIn(true);
        }

        else{
            alert("Invalid email or password");
        }
    }

    if(isLoggedIn){
        return<MemberDashboard />;
    }
    return(
        <div className="login-container">
            <h1>Gym Management System</h1>
            <h2>Login</h2>

            <label>Email:</label>
            <br />
            <input
            type = "email"
            name = "email"
            placeholder = "Enter your email"
            value={formData.email}
            onChange={handleChange}
            />
            <br /><br />

            <label>Password:</label>
            <br />
            <input
            type = "password"
            name = "password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            />
            <br /><br />
            <button  onClick = {handleLogin}>Login</button> 
          
        </div>
    );
}

export default Login;