import "../styles/Login.css";
import { useState } from "react";
import SignUp from "./SignUp.js";
import MemberDashboard from "./MemberDashboard.js";
import TrainerDashboard from "./TrainerDashboard.js";

function Login() {

    const [showSignUp, setShowSignUp] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") === "true"
    );

    const [userRole, setUserRole] = useState(
        localStorage.getItem("userRole") || ""
    );

    const [userName, setUserName] = useState(
        localStorage.getItem("userName") || ""
    );

    const [userEmail, setUserEmail] = useState(
        localStorage.getItem("userEmail") || ""
    );


    function handleChange(event) {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }


    function handleLogout() {

        setIsLoggedIn(false);
        setUserRole("");
        setUserName("");
        setUserEmail("");

        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userRole");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
    }


    async function handleLogin() {

        if (formData.email === "" || formData.password === "") {
            alert("Please enter email and password");
            return;
        }

        try {

            const response = await fetch(
                "http://localhost:5000/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (response.ok) {

                alert(data.message);

                setUserRole(data.role);
                setUserName(data.name);
                setUserEmail(formData.email);

                setFormData({
                    email: "",
                    password: ""
                });

                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("userRole", data.role);
                localStorage.setItem("userName", data.name);
                localStorage.setItem("userEmail", formData.email);

                setIsLoggedIn(true);
            }

        } catch (error) {

            alert("Cannot connect to server");
            console.log(error);

        }
    }


    /* SHOW SIGNUP PAGE */

    if (showSignUp) {

        return (
            <SignUp
                onLogin={() => setShowSignUp(false)}
            />
        );
    }


    /* SHOW DASHBOARD */

    if (isLoggedIn) {

        if (userRole === "TRAINER") {

            return (
                <TrainerDashboard
                    onLogout={handleLogout}
                />
            );
        }

        return (
            <MemberDashboard
                userName={userName}
                userEmail={userEmail}
                onLogout={handleLogout}
            />
        );
    }


    /* SHOW LOGIN PAGE */

    return (

        <form
            className="login-container"
            onSubmit={(event) => {
                event.preventDefault();
                handleLogin();
            }}
        >

            <div className="login-brand">

                <h1>FIT FREAK</h1>
                <h1>GYM</h1>

                <h3>STRONGER THAN YESTERDAY</h3>

                <p>Better habits. Healthier you.</p>

            </div>


            <div className="login-card">

                <h2>Login</h2>

                <p className="login-description">
                    Log in to your account and keep your fitness journey on track.
                </p>


                <label>Email:</label>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                />


                <label>Password:</label>

                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                />


                <button type="submit">
                    Login →
                </button>


                <button
                    type="button"
                    onClick={() => setShowSignUp(true)}
                >
                    Create Account
                </button>

            </div>

        </form>
    );
}

export default Login;