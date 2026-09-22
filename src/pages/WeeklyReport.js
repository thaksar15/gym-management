function WeeklyReport({backFromWeekly}){
    return(
        <div>
            <h1>Weekly Report</h1>
            <p>
Week: 14–20 September<br /><br />

14 September — Present<br />
15 September — Absent<br />
16 September — Present<br />
17 September — Present<br />
18 September — Present<br />
19 September — Absent<br />
20 September — Present<br />
<br />
Attendance: 5/7 days<br />

Weight: 72 kg<br />
Calories Burned: 1850 kcal<br /><br />

Progress:<br />
Good consistency this week. Keep it up! 💪
            </p>
            <button onClick = {backFromWeekly}>Back to Dashboard</button>
        </div>
    );
}

export default WeeklyReport;