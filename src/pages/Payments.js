function Payments({backFromPay}){
    return(
        <div>
            <h1>Payments</h1>

<p>Last Payment: ₹2000</p>
<p>Payment Date: 10 September 2026</p>
<p>Payment Method: UPI</p>
<p>Payment Status: Paid</p>

            <button onClick = {backFromPay}>Back to Dashboard</button>
        </div>
    );
}

export default Payments;