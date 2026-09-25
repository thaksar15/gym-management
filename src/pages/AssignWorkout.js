import { useEffect, useState } from "react";
import "../styles/AssignWorkout.css";

function AssignWorkout({ backFromAssignWork }) {

    const [members, setMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState("");

    const [monday, setMonday] = useState("");
    const [tuesday, setTuesday] = useState("");
    const [wednesday, setWednesday] = useState("");
    const [thursday, setThursday] = useState("");
    const [friday, setFriday] = useState("");
    const [saturday, setSaturday] = useState("");
    const [sunday, setSunday] = useState("");

    useEffect(() => {

        fetch("https://gym-management-1-dfc5.onrender.com/members")
            .then(response => response.json())
            .then(data => {
                setMembers(data);
            })
            .catch(error => {
                console.log(error);
            });

    }, []);

    async function handleAssign() {

        if (selectedMember === "") {
            alert("Please select a member");
            return;
        }

        const workout = `
Monday:
${monday}

Tuesday:
${tuesday}

Wednesday:
${wednesday}

Thursday:
${thursday}

Friday:
${friday}

Saturday:
${saturday}

Sunday:
${sunday}
        `;

        try {

            const response = await fetch(
                `https://gym-management-1-dfc5.onrender.com/users/${selectedMember}/workout`,
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

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
            } else {
                alert("Failed to assign workout");
            }

        } catch (error) {

            console.log(error);
            alert("Cannot connect to server");

        }
    }

    return (

        <div className="assign-workout-page">

            <h1>Assign Workout</h1>
             <h2>Weekly Workout Plan</h2>

            <form
                className="assign-workout-form"
                onSubmit={(event) => {
                    event.preventDefault();
                    handleAssign();
                }}
            >


                <label>Select Member:</label>

                <select
                    value={selectedMember}
                    onChange={(event) => setSelectedMember(event.target.value)}
                    required
                >

                    <option value="">
                        Select a member
                    </option>

                    {members.map((member) => (

                        <option
                            key={member._id}
                            value={member.email}
                        >
                            {member.name}
                        </option>

                    ))}

                </select>


               <label>Monday:</label>
<input
    type="text"
    value={monday}
    onChange={(event) => setMonday(event.target.value)}
    placeholder="Enter Monday workout"
/>

<label>Tuesday:</label>
<input
    type="text"
    value={tuesday}
    onChange={(event) => setTuesday(event.target.value)}
    placeholder="Enter Tuesday workout"
/>

<label>Wednesday:</label>
<input
    type="text"
    value={wednesday}
    onChange={(event) => setWednesday(event.target.value)}
    placeholder="Enter Wednesday workout"
/>

<label>Thursday:</label>
<input
    type="text"
    value={thursday}
    onChange={(event) => setThursday(event.target.value)}
    placeholder="Enter Thursday workout"
/>

<label>Friday:</label>
<input
    type="text"
    value={friday}
    onChange={(event) => setFriday(event.target.value)}
    placeholder="Enter Friday workout"
/>

<label>Saturday:</label>
<input
    type="text"
    value={saturday}
    onChange={(event) => setSaturday(event.target.value)}
    placeholder="Enter Saturday workout"
/>

<label>Sunday:</label>
<input
    type="text"
    value={sunday}
    onChange={(event) => setSunday(event.target.value)}
    placeholder="Enter Sunday workout"
/>


                <button type="submit">
                    Assign Workout
                </button>

                <button
                    type="button"
                    onClick={backFromAssignWork}
                >
                    Back to Dashboard
                </button>

            </form>

        </div>
    );
}

export default AssignWorkout;