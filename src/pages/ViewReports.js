function ViewReports({backFromViewRep}){
    return(
        <div>
        <h1>View Reports</h1>
<p>
Member: Rahul Sharma<br /><br />

Attendance: 5/7 days
Weight: 72 kg<br />
Calories Burned: 1850 kcal<br /><br />
        
Progress:
Good consistency this week.
</p>
<button onClick = {backFromViewRep}>Back to Dashboard</button>
</div>
    );
}

export default ViewReports;