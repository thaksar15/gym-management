import { useState } from "react";
import "../styles/SignUp.css";

function SignUp({ onLogin }) {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        age: "",
        gender: "",
        weight: "",
        height: "",
        membership: "",
        password: "",
        confirmPassword: "",
        phone: "",
        email: ""
    });

    function handleChange(event) {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }
async function handleSubmit(event) {

    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    try {

        const response = await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formData.firstName + " " + formData.lastName,
                email: formData.email,
                password: formData.password,
                role: "MEMBER",
                dob: formData.dob,
                age: formData.age,
                gender: formData.gender,
                weight: formData.weight,
                height: formData.height,
                membership: formData.membership,
                phone: formData.phone
            })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Account created successfully!");
            onLogin();
        } else {
            alert(data.message || "Account creation failed");
        }

    } catch (error) {

        console.log(error);
        alert("Cannot connect to server");

    }
}

    return (

        <div className="signup-page">

            <h2>Create your FIT FREAK GYM Account</h2>

            <form className="signup-form" onSubmit={handleSubmit}>

                <label>First Name:</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />

                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />

                <label>Date of Birth:</label>
                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                />

                <label>Age:</label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />

                <label>Gender:</label>
                <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                >
                    <option value="selectAnOption">Select an option</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="prefernot">
                        Prefer not to say
                    </option>
                </select>

                <label>Weight:</label>
                <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                />

                <label>Height:</label>
                <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    required
                />

                <label>Membership:</label>
                <select
                    name="membership"
                    value={formData.membership}
                    onChange={handleChange}
                    required
                >
                    <option value="selectAnOption">Select an option</option>
                    <option value="Bronze">
                        Bronze (1 month)
                    </option>

                    <option value="Silver">
                        Silver (3 months)
                    </option>

                    <option value="Gold">
                        Gold (6 months)
                    </option>

                    <option value="Platinum">
                        Platinum (12 months)
                    </option>
                </select>

                <label>Enter Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <label>Confirm Password:</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />

                <label>Phone Number:</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />

                <label>Enter Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="submit"
                    value="Create Your Account"
                    className="signup-submit"
                />

                <button
                    type="button"
                    className="login-button"
                    onClick={onLogin}
                >
                    Already have an account? Login
                </button>

            </form>

        </div>
    );
}

export default SignUp;