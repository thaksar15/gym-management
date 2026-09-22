function ViewMembers({backFromViewMem}){
    return(
        <div>
            <h1>Members</h1>
            <p>
1. Rahul Sharma<br />
   Membership: Gold<br />
   Status: Active<br /><br />

2. Aditya Patil
   Membership: Silver<br />
   Status: Active<br /><br />

3. Rohan Mehta
   Membership: Gold<br />
   Status: Expired
            </p>
            <button onClick = {backFromViewMem}>Back to Dashboard</button>
        </div>
    );     
}

export default ViewMembers;