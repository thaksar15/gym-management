import {useState} from "react";
import "../styles/AssignDiet.css";

function AssignDiet({backFromAssignDiet}){

const [member, setMember] = useState("sarthakchitnis@gmail.com");
    const [breakfast, setBreakfast] = useState("");
    const [lunch, setLunch] = useState("");
    const [snack, setSnack] = useState("");
    const [dinner, setDinner] = useState("");

    async function assignDiet(){

        const diet = `
Breakfast: ${breakfast}
Lunch: ${lunch}
Snack: ${snack}
Dinner: ${dinner}
        `;

        const response = await fetch(
            `http://localhost:5000/users/${member}/diet`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    diet: diet
                })
            }
        );

        if(response.ok){
            alert("Diet assigned successfully");
        }else{
            alert("Failed to assign diet");
        }
    }

    return(
        <div className="assign-diet-page">

            <h1>Assign Diet</h1>
            <h2>Create a diet plan for your member</h2>

            <div className="diet-form">

                <label>Member Name</label>

                <select
    value={member}
    onChange={(event) => setMember(event.target.value)}
>
    <option value="sarthakchitnis@gmail.com">Sarthak</option>
    <option value="aditya@gmail.com">Aditya Patil</option>
    <option value="rohan@gmail.com">Rohan Mehta</option>
</select>

                <label>Breakfast</label>

                <input
                    type="text"
                    placeholder="Enter breakfast plan"
                    value={breakfast}
                    onChange={(event) => setBreakfast(event.target.value)}
                />

                <label>Lunch</label>

                <input
                    type="text"
                    placeholder="Enter lunch plan"
                    value={lunch}
                    onChange={(event) => setLunch(event.target.value)}
                />

                <label>Snack</label>

                <input
                    type="text"
                    placeholder="Enter snack plan"
                    value={snack}
                    onChange={(event) => setSnack(event.target.value)}
                />

                <label>Dinner</label>

                <input
                    type="text"
                    placeholder="Enter dinner plan"
                    value={dinner}
                    onChange={(event) => setDinner(event.target.value)}
                />

                <button onClick={assignDiet}>
                    Assign Diet
                </button>

            </div>

            <button onClick={backFromAssignDiet}>
                Back to Dashboard
            </button>

        </div>
    );
}

export default AssignDiet;