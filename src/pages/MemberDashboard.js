import "../styles/MemberDashboard.css";
import {useState} from "react";
import Membership from "./Membership.js";
import Payments from "./Payments.js";
import Trainer from "./Trainer.js";
import Schedule from "./Schedule.js";
import Diet from "./Diet.js";
import WeeklyReport from "./WeeklyReport.js";

function MemberDashboard({userName, userEmail, onLogout}){
    const[showMembership,setShowMembership] = useState(
    localStorage.getItem("memberPage") === "membership"
);
   const[showPayments,setShowPayments] = useState(
    localStorage.getItem("memberPage") === "payments"
);
    const[showTrainer,setShowTrainer] = useState(
    localStorage.getItem("memberPage") === "trainer"
);
    const[showSchedule,setShowSchedule] = useState(
    localStorage.getItem("memberPage") === "schedule"
);
    const[showDiet,setShowDiet] = useState(
    localStorage.getItem("memberPage") === "diet"
);
    const[showWeekly,setShowWeekly] = useState(
    localStorage.getItem("memberPage") === "weekly"
);


    if(showMembership){
        return<Membership
    backFromMembership={backFromMembership}
    userEmail={userEmail}
/>
    }

    if(showPayments){
        return<Payments backFromPay = {backFromPay} />;
    }

    if(showTrainer){
        return<Trainer backFromTrain = {backFromTrain} />;
    }

    if(showSchedule){
        return<Schedule backFromSched = {backFromSched} userEmail={userEmail} />;
    }

    if(showDiet){
        return<Diet backFromDiet={backFromDiet} userEmail={userEmail} />
    }

    if(showWeekly){
        return<WeeklyReport backFromWeekly = {backFromWeekly} />;
    }

function backFromMembership() {
    setShowMembership(false);
    localStorage.removeItem("memberPage");
}

   function backFromMem(){
    localStorage.removeItem("memberPage");
    setShowMembership(false);
}

    function backFromPay(){
    localStorage.removeItem("memberPage");
    setShowPayments(false);
}

    function backFromTrain(){
    localStorage.removeItem("memberPage");
    setShowTrainer(false);
}
    function backFromSched(){
    localStorage.removeItem("memberPage");
    setShowSchedule(false);
}

    function backFromDiet(){
    localStorage.removeItem("memberPage");
    setShowDiet(false);
}

    function backFromWeekly(){
    localStorage.removeItem("memberPage");
    setShowWeekly(false);
}
   return(
    <div className="member-dashboard">
        <h1>Member Dashboard</h1>
        <h2>Welcome, {userName}</h2>
        

<div className="dashboard-banner">
    <img src="/images/gym3.png" alt="Gym interior" />
    <h3>Stay Consistent. Stay Strong.</h3>
    <p>Track your workouts, diet and progress in one place.</p>
</div>

        <div className="dashboard-buttons">
            <button
    onClick={() => {
        localStorage.setItem("memberPage", "membership");
        setShowMembership(true);
    }}
>
    Membership
</button>
           <button
    onClick={() => {
        localStorage.setItem("memberPage", "payments");
        setShowPayments(true);
    }}
>
    Payments
</button>
            <button
    onClick={() => {
        localStorage.setItem("memberPage", "trainer");
        setShowTrainer(true);
    }}
>
    Trainer
</button>
            <button
    onClick={() => {
        localStorage.setItem("memberPage", "schedule");
        setShowSchedule(true);
    }}
>
    Schedule
</button>
            <button
    onClick={() => {
        localStorage.setItem("memberPage", "diet");
        setShowDiet(true);
    }}
>
    Diet
</button>
           <button
    onClick={() => {
        localStorage.setItem("memberPage", "weekly");
        setShowWeekly(true);
    }}
>
    Weekly Report
</button>
            <button onClick={onLogout}>Logout</button>
        </div>
    </div>
);
}

export default MemberDashboard;