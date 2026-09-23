import {useState} from "react";
import ViewMembers from "./ViewMembers.js";
import AssignDiet from "./AssignDiet.js";
import AssignWorkout from "./AssignWorkout.js";
import ViewReports from "./ViewReports.js";
import "../styles/TrainerDashboard.css";

function TrainerDashboard({onLogout}){
    const[showViewMem,setShowViewMem] = useState(false);
    const[showAssignDiet,setShowAssignDiet] = useState(false);
    const[showAssignWork,setShowAssignWork] = useState(false);
    const[showViewRep,setShowViewRep] = useState(false);

    if(showViewMem){
        return<ViewMembers backFromViewMem={backFromViewMem} />;
    }

    if(showAssignDiet){
        return<AssignDiet backFromAssignDiet={backFromAssignDiet} />;
    }

    if(showAssignWork){
        return<AssignWorkout backFromAssignWork={backFromAssignWork} />;
    }

    if(showViewRep){
        return<ViewReports backFromViewRep={backFromViewRep} />;
    }

    function backFromViewMem(){
        setShowViewMem(false);
    }

    function backFromAssignDiet(){
        setShowAssignDiet(false);
    }

    function backFromAssignWork(){
        setShowAssignWork(false);
    }

    function backFromViewRep(){
        setShowViewRep(false);
    }

    return(
        <div className="trainer-dashboard">

            <h1>Trainer Dashboard</h1>
            <h2>Welcome, Trainer</h2>

<div className="dashboard-banner">
    <img src="/images/gym3.png" alt="Gym interior" />
    <h3>Stay Consistent. Stay Strong.</h3>
    <p>Track your clients' workouts, diet and progress in one place.</p>
</div>

            <div className="trainer-dashboard-buttons">

                <button onClick={() => setShowViewMem(true)}>
                    View Members
                </button>

                <button onClick={() => setShowAssignDiet(true)}>
                    Assign Diet
                </button>

                <button onClick={() => setShowAssignWork(true)}>
                    Assign Workout
                </button>

                <button onClick={() => setShowViewRep(true)}>
                    View Reports
                </button>
                <button onClick={onLogout}>Logout</button>

            </div>

        </div>
    );
}

export default TrainerDashboard;