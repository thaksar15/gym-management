import "../styles/ViewMembers.css";

function ViewMembers({backFromViewMem}){
    return(
        <div className="view-members-page">

            <h1>Members</h1>
            <h2>Gym Members</h2>

            <div className="member-card">
                <h3>Sarthak</h3>
                <p><strong>Membership:</strong> Gold</p>
                <p><strong>Status:</strong> Active</p>
            </div>

            <div className="member-card">
                <h3>Aditya Patil</h3>
                <p><strong>Membership:</strong> Silver</p>
                <p><strong>Status:</strong> Active</p>
            </div>

            <div className="member-card">
                <h3>Rohan Mehta</h3>
                <p><strong>Membership:</strong> Gold</p>
                <p><strong>Status:</strong> Expired</p>
            </div>

            <button onClick={backFromViewMem}>
                Back to Dashboard
            </button>

        </div>
    );
}

export default ViewMembers;