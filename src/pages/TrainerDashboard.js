import {useState} from "react";
import ViewMembers from "./ViewMembers.js";
import AssignDiet from "./AssignDiet.js";
import AssignWorkout from "./AssignWorkout.js";
import ViewReports from "./ViewReports.js";
import "../styles/TrainerDashboard.css";

function TrainerDashboard({onLogout}){
    const[showViewMem,setShowViewMem] = useState(
    localStorage.getItem("trainerPage") === "members"
);
    const[showAssignDiet,setShowAssignDiet] = useState(
    localStorage.getItem("trainerPage") === "assignDiet"
);
    const[showAssignWork,setShowAssignWork] = useState(
    localStorage.getItem("trainerPage") === "assignWorkout"
);
    const[showViewRep,setShowViewRep] = useState(
    localStorage.getItem("trainerPage") === "reports"
);

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
    localStorage.removeItem("trainerPage");
    setShowViewMem(false);
}

   function backFromAssignDiet(){
    localStorage.removeItem("trainerPage");
    setShowAssignDiet(false);
}

    function backFromAssignWork(){
    localStorage.removeItem("trainerPage");
    setShowAssignWork(false);
}

   function backFromViewRep(){
    localStorage.removeItem("trainerPage");
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

                <button
    onClick={() => {
        localStorage.setItem("trainerPage", "members");
        setShowViewMem(true);
    }}
>
    View Members
</button>

          <button
    onClick={() => {
        localStorage.setItem("trainerPage", "assignDiet");
        setShowAssignDiet(true);
    }}
>
    Assign Diet
</button>     

        <button
    onClick={() => {
        localStorage.setItem("trainerPage", "assignWorkout");
        setShowAssignWork(true);
    }}
>
    Assign Workout
</button>

             <button
    onClick={() => {
        localStorage.setItem("trainerPage", "reports");
        setShowViewRep(true);
    }}
>
    View Reports
</button>
                <button onClick={onLogout}>Logout</button>

            </div>

        </div>
    );
}

export default TrainerDashboard;