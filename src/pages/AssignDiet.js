import { useEffect, useState } from "react";
import "../styles/AssignDiet.css";

function AssignDiet({ backFromAssignDiet }) {

    const [members, setMembers] = useState([]);
    const [selectedMember, setSelectedMember] = useState("");
    const [breakfast, setBreakfast] = useState("");
    const [lunch, setLunch] = useState("");
    const [eveningSnack, setEveningSnack] = useState("");
    const [dinner, setDinner] = useState("");

    useEffect(() => {

        fetch("http://localhost:5000/members")
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

        const diet = `
Breakfast:
${breakfast}

Lunch:
${lunch}

Evening Snack:
${eveningSnack}

Dinner:
${dinner}
        `;

        try {

            const response = await fetch(
                `http://localhost:5000/users/${selectedMember}/diet`,
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

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
            } else {
                alert("Failed to assign diet");
            }

        } catch (error) {

            console.log(error);
            alert("Cannot connect to server");

        }
    }

    return (

        <div className="assign-diet-page">

            <h1>Assign Diet</h1>
            <h2>Daily Diet Plan</h2>

            <form
                className="assign-diet-form"
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

<label>Breakfast:</label>
<input
    type="text"
    value={breakfast}
    onChange={(event) => setBreakfast(event.target.value)}
    placeholder="Enter breakfast"
/>

<label>Lunch:</label>
<input
    type="text"
    value={lunch}
    onChange={(event) => setLunch(event.target.value)}
    placeholder="Enter lunch"
/>

<label>Evening Snack:</label>
<input
    type="text"
    value={eveningSnack}
    onChange={(event) => setEveningSnack(event.target.value)}
    placeholder="Enter evening snack"
/>

<label>Dinner:</label>
<input
    type="text"
    value={dinner}
    onChange={(event) => setDinner(event.target.value)}
    placeholder="Enter dinner"
/>

                <button type="submit">
                    Assign Diet
                </button>

                <button
                    type="button"
                    onClick={backFromAssignDiet}
                >
                    Back to Dashboard
                </button>

            </form>

        </div>
    );
}

export default AssignDiet;