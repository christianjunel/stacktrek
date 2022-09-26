import { useEffect, useState } from "react";
import './styles/Workouts.css'

const WorkoutsAerobic = ({ setAuth }) => {
    const [workouts, setWorkouts] = useState([]);
    const [bmiScore, setBMIScore] = useState(0.00);
    const [bmiStatus, setBMIStatus] = useState(0.00);

    const getBMI = async () => {
      
        try {
            const response = await fetch(
                "http://localhost:8000/profile",
                {
                    method: "GET",
                    //retrieving the token and putting it in the Auth header
                    headers: { Authorization: "Bearer " + localStorage.getItem('token') }
                })
            //parsing the json back to a JS object
            const parseRes = await response.json();
            const data = parseRes.rows[0]

            //bmi stuff
            const bmiScoreCalc = ((data.weight_in_kg / data.height_in_cm / data.height_in_cm) * 10000).toFixed(1)
            setBMIScore(bmiScoreCalc);
            //bmi categories
            if (bmiScore < 18.5) {
                setBMIStatus('Underweight');
            } else if (bmiScore >= 18.5 && bmiScore <= 24.9) {
                setBMIStatus('Normal Range');
            } else if (bmiScore >= 25 && bmiScore <= 29.9) {
                setBMIStatus('Overweight');
            } else if (bmiScore >= 30) {
                setBMIStatus('Obese');
            } 

            const responseWorkouts = await fetch(
                "http://localhost:8000/workout",
                {
                    method: "GET",
                    //retrieving the token and putting it in the Auth header
                    headers: { Authorization: "Bearer " + localStorage.getItem('token') }
                })
            
            const parseWorkouts = await responseWorkouts.json();
            setWorkouts(parseWorkouts);
            
            
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        
        getBMI();
        
    }, [bmiScore])
    return (
        <div>
            <div className="flexbox-dashboard">
                <h1 className="aw-title">Aerobic Workouts</h1>
                <p>
                    Aerobic exercise is any type of cardiovascular conditioning, or “cardio.” It can include activities like brisk walking, swimming, running, or cycling. By definition, aerobic exercise means “with oxygen.” Your breathing and heart rate will increase during aerobic activities.
                </p>
            </div>
            <div class="container">
                    <div class="flexbox-container">
            {workouts.map((workout, index) => {
                if (workout.category === bmiStatus && workout.type === 'Aerobic') {
                    return <div class="flexbox-item" key={index}>
                    <iframe width="580" height="315" src={workout.link} frameBorder="0" allowFullScreen></iframe>
                    </div>
                } 
            })}
                </div>
            </div>
    
        </div>
    )
}
export default WorkoutsAerobic;