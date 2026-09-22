import {useState} from "react";
import ViewMembers from "./ViewMembers.js";
import AssignDiet from "./AssignDiet.js";
import AssignWorkout from "./AssignWorkout.js";
import ViewReports from "./ViewReports.js";

function TrainerDashboard(){
    const[showViewMem,setShowViewMem] = useState(false);
    const[showAssignDiet,setShowAssignDiet] = useState(false);
    const[showAssignWork,setShowAssignWork] = useState(false);
    const[showViewRep,setShowViewRep] = useState(false);

    if(showViewMem){
        return<ViewMembers backFromViewMem={backFromViewMem} />;
    }

    if(showAssignDiet){
        return<AssignDiet backFromAssignDiet = {backFromAssignDiet} />;
    }

    if(showAssignWork){
        return<AssignWorkout backFromAssignWork = {backFromAssignWork} />;
    }

    if(showViewRep){
        return<ViewReports backFromViewRep = {backFromViewRep} />;
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
        <div>
            <h1>Trainer Dashboard</h1>
            <h2>Welcome, Trainer</h2>
            <button onClick={() => setShowViewMem(true)}>View Members</button>
            <button onClick={() => setShowAssignDiet(true)}>Assign Diet</button>
            <button onClick={() => setShowAssignWork(true)}>Assign Workout</button>
            <button onClick={() => setShowViewRep(true)}>View Reports</button>
        </div>
    );
}

export default TrainerDashboard;

  


