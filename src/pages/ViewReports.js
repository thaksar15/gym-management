import { useEffect, useState } from "react";
import "../styles/ViewReports.css";

function ViewReports({ backFromViewRep }) {

    const [members, setMembers] = useState([]);

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

    return (
        <div className="view-reports-page">

            <h1>Member Reports</h1>

            <div className="reports-container">

                {members.map((member) => (

                    <div className="report-card" key={member._id}>

                        <h2>{member.name}</h2>

                        <p>
                            <strong>Email:</strong> {member.email}
                        </p>

                        <p>
                            <strong>Age:</strong> {member.age}
                        </p>

                        <p>
                            <strong>Gender:</strong> {member.gender}
                        </p>

                        <p>
                            <strong>Weight:</strong> {member.weight} kg
                        </p>

                        <p>
                            <strong>Membership:</strong> {member.membership}
                        </p>

                        <p>
                            <strong>Diet:</strong>
                        </p>

                        <pre>{member.diet || "No diet assigned"}</pre>

                        <p>
                            <strong>Workout:</strong>
                        </p>

                        <pre>{member.workout || "No workout assigned"}</pre>

                    </div>

                ))}

            </div>

            <button onClick={backFromViewRep}>
                Back to Dashboard
            </button>

        </div>
    );
}

export default ViewReports;