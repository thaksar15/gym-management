import "../styles/WeeklyReport.css";

function WeeklyReport({backFromWeekly}){
    return(
        <div className="weekly-page">

            <h1>Weekly Report(Non Operational)</h1>
            <h2>14–20 September 2026</h2>

            <div className="weekly-card">

                <h3>Attendance</h3>

                <p>14 September — Present</p>
                <p>15 September — Absent</p>
                <p>16 September — Present</p>
                <p>17 September — Present</p>
                <p>18 September — Present</p>
                <p>19 September — Absent</p>
                <p>20 September — Present</p>

                <p className="report-highlight">
                    Attendance: 5/7 days
                </p>

            </div>

            <div className="weekly-card">

                <h3>Progress</h3>

                <p><strong>Weight:</strong> 72 kg</p>
                <p><strong>Calories Burned:</strong> 1850 kcal</p>

                <p className="progress-message">
                    Good consistency this week. Keep it up! 💪
                </p>

            </div>

            <button onClick={backFromWeekly}>
                Back to Dashboard
            </button>

        </div>
    );
}

export default WeeklyReport;