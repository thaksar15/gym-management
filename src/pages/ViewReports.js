import "../styles/ViewReports.css";

function ViewReports({backFromViewRep}){
    return(
        <div className="view-reports-page">

            <h1>Member Reports</h1>
            <h2>View member progress</h2>

            <div className="report-card">

                <h3>Sarthak</h3>

                <p><strong>Attendance:</strong> 5/7 days</p>
                <p><strong>Weight:</strong> 72 kg</p>
                <p><strong>Calories Burned:</strong> 1850 kcal</p>
                <p><strong>Progress:</strong> Good consistency</p>

            </div>

            <div className="report-card">

                <h3>Aditya Patil</h3>

                <p><strong>Attendance:</strong> 6/7 days</p>
                <p><strong>Weight:</strong> 68 kg</p>
                <p><strong>Calories Burned:</strong> 2100 kcal</p>
                <p><strong>Progress:</strong> Excellent</p>

            </div>

            <div className="report-card">

                <h3>Rohan Mehta</h3>

                <p><strong>Attendance:</strong> 2/7 days</p>
                <p><strong>Weight:</strong> 81 kg</p>
                <p><strong>Calories Burned:</strong> 1200 kcal</p>
                <p><strong>Progress:</strong> Needs improvement</p>

            </div>

            <button onClick={backFromViewRep}>
                Back to Dashboard
            </button>

        </div>
    );
}

export default ViewReports;