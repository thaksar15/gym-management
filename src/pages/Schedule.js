import "../styles/Schedule.css";
import {useEffect, useState} from "react";

function Schedule({backFromSched, userEmail}){
const [workout, setWorkout] = useState("");

useEffect(() => {

    fetch(`http://localhost:5000/users/${userEmail}/workout`)
        .then(response => response.json())
        .then(data => {
            setWorkout(data.workout);
        });

}, [userEmail]);

    return(
        <div className="schedule-page">

            <h1>Workout Schedule</h1>
            <h2>Your weekly workout plan</h2>
        <div className="schedule-card">
    <pre>{workout}</pre>
</div>
            <button onClick={backFromSched}>
                Back to Dashboard
            </button>

        </div>
    );
}

export default Schedule;