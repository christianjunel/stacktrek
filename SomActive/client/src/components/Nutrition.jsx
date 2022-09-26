import { useEffect, useState } from "react";
import './styles/Workouts.css'

const Nutrition = ({ setAuth }, props) => {
    const [nutrition, setNutrition] = useState([]);
    const [diet, setDiet] = useState("");
    const getNutrition = async () => {

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
            const dataDiet = parseRes.rows[0].diet;
            setDiet(dataDiet)
            const responseNutrition = await fetch(
                "http://localhost:8000/nutrition",
                {
                    method: "GET",
                    //retrieving the token and putting it in the Auth header
                    headers: { Authorization: "Bearer " + localStorage.getItem('token') }
                })
            
            const parseNutrition = await responseNutrition.json();
            setNutrition(parseNutrition);
            console.log(nutrition)
            
            
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        
        getNutrition();
        
    }, [diet])
    return (
        <div>
            {console.log(props.diet)}
            <h1 id="nutrition-videos">Related Nutrition Videos</h1>
            <div class="container">
                    <div class="flexbox-container">
            {nutrition.map((nut, index) => {
                if (nut.category === diet) {
                    return <div class="flexbox-item" key={index}>
                        {console.log(nut.category)}
                    <iframe width="580" height="315" src={nut.link} frameBorder="0" allowFullScreen></iframe>
                    </div>
                } 
            })}
                </div>
            </div>
        </div>
    )
}
export default Nutrition;