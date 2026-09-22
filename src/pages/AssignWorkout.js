function AssignWorkout({backFromAssignWork}){
    return(
        <div>
            <h1>Assign Workout</h1>
            <p>
Member Name: Swapnil Joshi<br /><br />

Day: Saturday<br />
Time: 10:00 AM<br />
Workout: Chest + Biceps<br />
Exercises: Chest press - 3 x 15<br />
           Bicep Curls - 3 x 15
            </p>
<button>Assign Workout</button><br /><br />

<button onClick={backFromAssignWork}>Back to Dashboard</button>
        </div>
    );
}

export default AssignWorkout;