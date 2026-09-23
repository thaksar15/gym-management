import "../styles/Membership.css";

function Membership({backFromMem}){
    return(
        <div className="membership-page">

            <h1>Membership</h1>
            <h2>Here are your membership details</h2>

            <div className="membership-card">

                <h3>Gold Membership</h3>

                <p><strong>Start Date:</strong> 1 September 2026</p>
                <p><strong>Expiry Date:</strong> 1 September 2027</p>
                <p><strong>Status:</strong> <span>Active</span></p>
                <p><strong>Amount:</strong> ₹12000</p>

            </div>

            <button onClick={backFromMem}>
                Back to Dashboard
            </button>

        </div>
    );
}

export default Membership;