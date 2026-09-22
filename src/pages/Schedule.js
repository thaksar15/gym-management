function Schedule({backFromSched}){
    return(
        <div>
            <h1>Workout Schedule</h1>
          
            <p>Monday</p>
            <p>10:00 AM - Chest & Triceps</p>
            <p>
                Bench Press — 3 × 10 <br />
                Incline Dumbbell Press — 3 × 12<br />
                Triceps Pushdown — 3 × 12
            </p>
            <br />
            <p>Wednesday</p>
            <p>6:00 PM - Back & Biceps</p>
            <p>
                Lat Pulldown — 3 × 10<br />
                Seated Cable Row — 3 × 12<br />
                Barbell Curl — 3 × 10<br />
                Hammer Curl — 3 × 12
            </p>
            <br />
            <p>Friday</p>
            <p>7:00 AM - Legs</p>
            <p>
                Squats — 3 × 10<br />
                Leg Press — 3 × 12<br />
                Leg Curl — 3 × 12<br />
                Calf Raises — 3 × 15
            </p>
            <br />
            <p>Sunday</p>
            <p>9:00 AM - Cardio</p>
            <p>
                Treadmill — 20 min<br />
                Cycling — 15 min<br />
                Jumping Jacks — 3 × 20
            </p>

            <button onClick={backFromSched}>Back to Dashboard</button>
        </div>
    );
}

export default Schedule;