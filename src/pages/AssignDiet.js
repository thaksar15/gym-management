function AssignDiet({backFromAssignDiet}){
    return(
        <div>
        <h1>Assign Diet</h1>
<p>        
Member Name: Sharad Kelkar<br /><br />

Breakfast: Sprouts<br />
Lunch: Chapati + Vegetable<br />
Snack: Peanut Butter + Bread<br />
Dinner: Chapati + Vegetable<br /><br />
</p>        
<button>Assign Diet</button><br /><br />

<button onClick = {backFromAssignDiet}>Back to Dashboard</button>
        </div>
    );
}

export default AssignDiet;