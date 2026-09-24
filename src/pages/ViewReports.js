import "../styles/ViewReports.css";

function ViewReports({ backFromViewRep }) {

    return (
        <div className="view-reports-page">

            <h1>Member Reports(Non Operational)</h1>

            <div className="reports-container">

                <div className="report-card">

                    <h2>Sarthak Chitnis</h2>

                    <p>
                        <strong>Attendance:</strong> 5/7 days
                    </p>

                    <p>
                        <strong>14 September:</strong> Present
                    </p>

                    <p>
                        <strong>15 September:</strong> Absent
                    </p>

                    <p>
                        <strong>16 September:</strong> Present
                    </p>

                    <p>
                        <strong>17 September:</strong> Present
                    </p>

                    <p>
                        <strong>18 September:</strong> Present
                    </p>

                    <p>
                        <strong>19 September:</strong> Absent
                    </p>

                    <p>
                        <strong>20 September:</strong> Present
                    </p>

                    <p>
                        <strong>Weight:</strong> 72 kg
                    </p>

                    <p>
                        <strong>Calories Burned:</strong> 1850 kcal
                    </p>

                    <p className="progress-message">
                        Good consistency this week. Keep it up! 💪
                    </p>

                </div>

               

                
            </div>

            <button onClick={backFromViewRep}>
                Back to Dashboard
            </button>

        </div>
    );
}

export default ViewReports;