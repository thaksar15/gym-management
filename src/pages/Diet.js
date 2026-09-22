function Diet({backFromDiet}){
    return(
        <div>
            <h1>Diet: </h1>
        <p>Breakfast: Oats + Eggs</p>
        <p>Lunch: Rice + Chicken + Veges</p>
        <p>Snack: Fruits + Nuts</p>
        <p>Dinner: Roti + Paneer + Salad</p>
            <button onClick = {backFromDiet}>Back to Dashboard</button>
        </div>
    );
}

export default Diet;