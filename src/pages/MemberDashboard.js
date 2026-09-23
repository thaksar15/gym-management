import "../styles/MemberDashboard.css";
import {useState} from "react";
import Membership from "./Membership.js";
import Payments from "./Payments.js";
import Trainer from "./Trainer.js";
import Schedule from "./Schedule.js";
import Diet from "./Diet.js";
import WeeklyReport from "./WeeklyReport.js";

function MemberDashboard({userName, userEmail, onLogout}){
    const[showMembership,setShowMembership] = useState(false);
    const[showPayments,setShowPayments] = useState(false);
    const[showTrainer,setShowTrainer] = useState(false);
    const[showSchedule,setShowSchedule] = useState(false);
    const[showDiet,setShowDiet] = useState(false);
    const[showWeekly,setShowWeekly] = useState(false);


    if(showMembership){
        return<Membership backFromMem={backFromMem} />;
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

    function backFromMem(){
        setShowMembership(false);
    }

    function backFromPay(){
        setShowPayments(false);
    }

    function backFromTrain(){
        setShowTrainer(false);
    }

    function backFromSched(){
        setShowSchedule(false);
    }

    function backFromDiet(){
        setShowDiet(false);
    }

    function backFromWeekly(){
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
            <button onClick={() => setShowMembership(true)}>Membership</button>
            <button onClick={() => setShowPayments(true)}>Payments</button>
            <button onClick={() => setShowTrainer(true)}>Trainer</button>
            <button onClick={() => setShowSchedule(true)}>Schedule</button>
            <button onClick={() => setShowDiet(true)}>Diet</button>
            <button onClick={() => setShowWeekly(true)}>Weekly Report</button>
            <button onClick={onLogout}>Logout</button>
        </div>
    </div>
);
}

export default MemberDashboard;