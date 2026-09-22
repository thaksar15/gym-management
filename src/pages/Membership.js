
function Membership({backFromMem}){
    return(
        <div>
            <h1>Membership</h1>
            <h2>Here are your membership details</h2>

<p>Membership Type: Gold</p>
<p>Start Date: 1 September 2026</p>
<p>Expiry Date: 1 September 2027</p>
<p>Status: Active</p>
<p>Amount: ₹12000</p>
            <button onClick = {backFromMem}>Back to Dashboard</button>
        </div>
    );
}

export default Membership;