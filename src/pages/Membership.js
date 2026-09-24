import { useEffect, useState } from "react";
import "../styles/Membership.css";

function Membership({ backFromMembership, userEmail }) {

    const [details, setDetails] = useState(null);

    useEffect(() => {

        fetch(`http://localhost:5000/users/${userEmail}/membership`)
            .then(response => response.json())
            .then(data => {
                setDetails(data);
            })
            .catch(error => {
                console.log(error);
            });

    }, [userEmail]);

    if (!details) {
        return <p>Loading membership details...</p>;
    }

    return (

        <div className="membership-page">

            <h1>Membership Details</h1>

            <div className="membership-card">

                <p>
                    <strong>Name:</strong> {details.name}
                </p>

                <p>
                    <strong>Email:</strong> {details.email}
                </p>

                <p>
                    <strong>Date of Birth:</strong> {details.dob}
                </p>

                <p>
                    <strong>Age:</strong> {details.age}
                </p>

                <p>
                    <strong>Gender:</strong> {details.gender}
                </p>

                <p>
                    <strong>Weight:</strong> {details.weight} kg
                </p>

                 <p>
                    <strong>Height:</strong> {details.height} cm
                </p>

                <p>
                    <strong>Membership:</strong> {details.membership}
                </p>

                <p>
                    <strong>Phone:</strong> {details.phone}
                </p>

            </div>

            <button onClick={backFromMembership}>
                Back to Dashboard
            </button>

        </div>
    );
}

export default Membership;