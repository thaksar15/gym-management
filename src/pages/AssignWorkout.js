import {useState} from "react";
import "../styles/AssignWorkout.css";

function AssignWorkout({backFromAssignWork}){
    const [member, setMember] = useState("sarthakchitnis@gmail.com");
    const [monday, setMonday] = useState("");
const [wednesday, setWednesday] = useState("");
const [friday, setFriday] = useState("");
const [sunday, setSunday] = useState("");

async function assignWorkout(){

    const workout = `
Monday: ${monday}
Wednesday: ${wednesday}
Friday: ${friday}
Sunday: ${sunday}
`;

    const response = await fetch(
        `http://localhost:5000/users/${member}/workout`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                workout: workout
            })
        }
    );

    if(response.ok){
        alert("Workout assigned successfully");
    }else{
        alert("Failed to assign workout");
    }
}
    return(
        
        <div className="assign-workout-page">

            <h1>Assign Workout</h1>
            <h2>Create a workout plan for your member</h2>

            <div className="workout-form">

                <label>Member Name</label>
                <select
    value={member}
    onChange={(event) => setMember(event.target.value)}
>
    <option value="sarthakchitnis@gmail.com">Sarthak</option>
    <option value="aditya@gmail.com">Aditya Patil</option>
    <option value="rohan@gmail.com">Rohan Mehta</option>
</select>

                <label>Monday</label>
                <input
                    type="text"
                    placeholder="Enter Monday workout"
                    value={monday}
                    onChange={(event) => setMonday(event.target.value)}
                />

                <label>Wednesday</label>
                <input
                    type="text"
                    placeholder="Enter Wednesday workout"
                    value={wednesday}
                    onChange={(event) => setWednesday(event.target.value)}
                />

                <label>Friday</label>
                <input
                    type="text"
                    placeholder="Enter Friday workout"
                    value={friday}
                    onChange={(event) => setFriday(event.target.value)}
                />

                <label>Sunday</label>
                <input
                    type="text"
                    placeholder="Enter Sunday workout"
                    value={sunday}
                    onChange={(event) => setSunday(event.target.value)}
                />

                <button onClick={assignWorkout}>Assign Workout</button>

            </div>

            <button onClick={backFromAssignWork}>
                Back to Dashboard
            </button>

        </div>
    );
}

export default AssignWorkout;