import { useState } from "react";

const BMI = async() => {
    const [weightInKG, setWeightInKG] = useState(0.00);
    const [heightInCM, setHeightInCM] = useState(0.00);
    try {
        //fetch api that uses the GET method
        const response = await fetch(
            "https://somactive-server-test.herokuapp.com/bmi",
            {
                method: "GET",
                //retrieving the token and putting it in the Auth header
                headers: { Authorization: "Bearer " + localStorage.getItem('token') }
            })
        //parsing the json back to a JS object
        const parseRes = await response.json();
        setWeightInKG(parseRes.weight_in_kg)
        setHeightInCM(parseRes.height_in_cm)

        // setBmi(parseRes);

    } catch (error) {
        console.log(error.message)
    }

    return (
       
            <div>
                <p>{setWeightInKG(weightInKG)}</p>
                <p>{setHeightInCM(heightInCM)}</p>
            </div>
        
    )
}

export default BMI;