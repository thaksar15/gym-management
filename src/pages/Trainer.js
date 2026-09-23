import "../styles/Trainer.css";

function Trainer({backFromTrain}){
    return(
        <div className="trainer-page">

            <h1>Trainer</h1>
            <h2>Your assigned trainer</h2>

            <div className="trainer-card">

                <h3>Ram Yadav</h3>

                <p><strong>Specialization:</strong> Bulk</p>
                <p><strong>Experience:</strong> 14 Years</p>
                <p><strong>Contact:</strong> 9892241813</p>

            </div>

            <button onClick={backFromTrain}>
                Back to Dashboard
            </button>

        </div>
    );
}

export default Trainer;