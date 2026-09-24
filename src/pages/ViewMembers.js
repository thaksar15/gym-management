import { useEffect, useState } from "react";
import "../styles/ViewMembers.css";

function ViewMembers({ backFromViewMem }) {

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

        <div className="view-members-page">

            <h1>Members</h1>

            <div className="members-container">

                {members.map((member) => (

                    <div className="member-card" key={member._id}>

                        <h3>{member.name}</h3>

                        <p>
                            <strong>Email:</strong> {member.email}
                        </p>

                        <p>
                            <strong>Phone:</strong> {member.phone}
                        </p>

                        <p>
                            <strong>Date of Birth:</strong> {member.dob}
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

                    </div>

                ))}

            </div>

            <button onClick={backFromViewMem}>
                Back to Dashboard
            </button>

        </div>
    );
}

export default ViewMembers;