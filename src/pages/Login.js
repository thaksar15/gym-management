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
    const[userRole,setUserRole] = useState("");

    function handleChange(event){
        const{ name,value} = event.target;

        setFormData({
            ...formData,
            [name]:value
        });
    }

    async function handleLogin(){

    if (formData.email === "" || formData.password === ""){
        alert("Please enter email and password");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

       const data = await response.json();

       if (response.ok) {
    alert(data.message);
    setUserRole(data.role);
    setIsLoggedIn(true);
}

    } catch (error) {
        alert("Cannot connect to server");
        console.log(error);
    }
}

    if(isLoggedIn){
    if(userRole === "TRAINER"){
        return <TrainerDashboard />;
    }

    return <MemberDashboard />;
}
return(
    <form className="login-container" onSubmit={(event) => {
        event.preventDefault();
        handleLogin();
    }}>
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
          
        </form>
        
    );
}

export default Login;