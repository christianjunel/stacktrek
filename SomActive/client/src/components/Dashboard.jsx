import { useEffect, useState } from "react";
// import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";
import BMIUpdateModal from "./BMIUpdateModal";
import MacroDashboard from "./MacroDashboard";
import Nutrition from "./Nutrition";
import './styles/Dashboard.css';
import Workouts from "./Workouts";
// import BMI from "./BMI";
// import DisplayPics from "./DisplayPics";
// import Tweets from "./Tweets";
// import UploadPhoto from "./Upload";

const Dashboard = ({ setAuth }) => {
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [image, setImage] = useState("");
    const [bmiImage, setBMIImage] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [sex, setSex] = useState("");
    // const [regDate, setRegDate] = useState("");
    const [reminder, setReminder] = useState("");
    const [weightInKG, setWeightInKG] = useState(0.00);
    const [heightInCM, setHeightInCM] = useState(0.00);
    const [bmiStatus, setBMIStatus] = useState("");
    const [bmiScore, setBMIScore] = useState(0.00);
    const [bmiDesc, setBMIDesc] = useState("");
    const [activity, setActivity] = useState("");
    const [diet, setDiet] = useState("");

    const getProfile = async () => {
        //Get Age
        const getAge = dateString => {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }
        try {
            //fetch api that uses the GET method
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
        
            console.log(parseRes.rows[0])
            setName(`${data.first_name} ${data.last_name}`);
            setBirthDate(getAge(data.birthdate));
            setImage(`http://localhost:8000/img/${data.image_path}`)
            setEmailAddress(data.email_address)
            setSex(data.sex)
            // setRegDate(`${new Date(data.registration_date)}`)
            setWeightInKG(data.weight_in_kg + ' kg')
            setHeightInCM(data.height_in_cm + ' cm')
            setReminder(data.user_reminder_to_self);
            setActivity(data.activity);
            setDiet(data.diet);

            //bmi stuff
            const bmiScoreCalc = ((data.weight_in_kg / data.height_in_cm / data.height_in_cm) * 10000).toFixed(1)
            setBMIScore(bmiScoreCalc);
            //bmi categories
            if (bmiScore < 18.5) {
                setBMIStatus('Underweight');
                setBMIImage("https://img.icons8.com/ios-filled/500/d50c3a/body-type-tall.png")
            } else if (bmiScore >= 18.5 && bmiScore <= 24.9) {
                setBMIStatus('Normal Range');
                setBMIImage("https://img.icons8.com/ios-filled/500/d50c3a/general-massage-area.png")
            } else if (bmiScore >= 25 && bmiScore <= 29.9) {
                setBMIStatus('Overweight');
                setBMIImage("https://img.icons8.com/ios-filled/500/d50c3a/body-type-overweight.png")
            } else if (bmiScore >= 30) {
                setBMIStatus('Obese');
                setBMIImage("https://img.icons8.com/ios-filled/500/d50c3a/fat-man-cry.png")
            } 
            
            //bmi categories descriptions
            if (bmiScore < 18.5) {
                setBMIDesc('If your BMI is less than 18.5, it falls within the underweight range.');
            } else if (bmiScore >= 18.5 && bmiScore <= 24.9) {
                setBMIDesc('If your BMI is 18.5 to <25, it falls within the healthy weight range.');
            } else if (bmiScore >= 25 && bmiScore <= 29.9) {
                setBMIDesc('If your BMI is 25.0 to <30, it falls within the overweight range.');
            } else if (bmiScore >= 30) {
                setBMIDesc('If your BMI is 30.0 or higher, it falls within the obesity range.');
            } 
            
        } catch (error) {
            console.log(error.message)
            setAuth(false)
        }
    }

    

    // const logout = async (e) => {
    //     e.preventDefault()
    //     try {
    //         //removing the token from localstorage
    //         localStorage.removeItem('token')
    //         setAuth(false)
    //     } catch (error) {
    //         console.log(error.message)
    //     }
    // }

    useEffect(() => {
        
        getProfile();
        
    }, [bmiScore, bmiImage, activity, diet, heightInCM, weightInKG])


    return (
        <div>
            <div className="flexbox-dashboard">
                <Image className="db-prof-pic"
                    src={image}
                    width='200'
                    height='200'
                />
                <h1 className="the-name">{name}</h1>
                <p className="the-email"><strong>{emailAddress}</strong></p>
                <p className="the-reminder"><em>"{reminder}"</em></p>
            </div>
            <div className="flexxbox-container">
                <div className="flexxbox-item flexxbox-item-1">
                    {/* <img src={bmiImage} alt="bmi-image-info"/> */}
                    <MacroDashboard diet={diet} activity={activity} sex={sex} age={birthDate} weightInKG={weightInKG} heightInCM={heightInCM}/>
                </div>
                <div className="flexboxx-item flexxbox-item-2">
                    <h2>BMI Overview</h2>
                    <p className="bmi-p">Sex: <strong>{sex}</strong></p>
                    <p className="bmi-p">Age: <strong>{birthDate} years old</strong></p>
                    <p className="bmi-p">Weight (kg): <strong>{weightInKG}</strong></p>
                    <p className="bmi-p">Height (cm): <strong>{heightInCM}</strong></p>
                    <div className="bmi-overview">
                        <h2>Your BMI is {bmiScore}</h2>
                        <p className="bmi" id="bmi">{bmiStatus}</p>
                        <p className="bmi-desc">{bmiDesc}</p>
                        <BMIUpdateModal />
                    </div>
                </div>
            </div>
            <Workouts />
            <Nutrition diet={diet}/>
        </div>
        
    )
}
export default Dashboard;