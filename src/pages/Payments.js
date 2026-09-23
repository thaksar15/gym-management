import "../styles/Payments.css";

function Payments({backFromPay}){

    async function handlePayment(){

    const response = await fetch(
        "http://localhost:5000/create-checkout-session",
        {
            method: "POST"
        }
    );

    const data = await response.json();

    window.location.href = data.url;
}
    return(
        <div className="payments-page">

            <h1>Payments</h1>
            <h2>Your payment details</h2>

            <div className="payment-card">

                <h3>Latest Payment</h3>

                <p><strong>Amount:</strong> ₹2000</p>
                <p><strong>Payment Date:</strong> 10 September 2026</p>
                <p><strong>Payment Method:</strong> UPI</p>
                <p>
                    <strong>Status:</strong>
                    <span> Paid</span>
                </p>
                <button onClick={handlePayment}>
    Pay Now
</button>

            </div>

            <button onClick={backFromPay}>
                Back to Dashboard
            </button>

        </div>
    );
}

export default Payments;