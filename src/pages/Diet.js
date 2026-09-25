import {useEffect, useState} from "react";
import "../styles/Diet.css";

function Diet({backFromDiet,userEmail}) {

    const [diet, setDiet] = useState("");

    useEffect(() => {

        fetch(`http://localhost:5000/users/${userEmail}/diet`)
            .then(response => response.json())
            .then(data => {
                setDiet(data.diet);
            });

    }, [userEmail]);

    return(
        <div className="diet-page">

            <h1>Diet Plan</h1>
            <h2>Your Daily Diet Plan</h2>

            <div className="diet-card">

                <pre>{diet}</pre>

            </div>

            <button onClick={backFromDiet}>
                Back to Dashboard
            </button>

        </div>
    );
}

export default Diet;