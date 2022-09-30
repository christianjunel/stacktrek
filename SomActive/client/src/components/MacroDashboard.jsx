import InputGroup from 'react-bootstrap/InputGroup';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './styles/Home.css'
import Alert from 'react-bootstrap/Alert';

const MacroDashboard = (props, { setAuth }) => {
    // const [result, setResult] = useState("");
    const [disabled, setDisabled] = useState(false);
    const [showMacroAlert, setShowMacroAlert] = useState(false);
    const {sex, age, weightInKG, heightInCM, activity, diet} = props;
    
    const [inputs, setInputs] = useState({
        the_activity: activity,
        the_diet: diet
    })
    
    const onChange = e => {     
        e.preventDefault();
        setInputs({ ...inputs, [e.target.name]: e.target.value })
        setDisabled(false);
        }

    const { the_activity, the_diet } = inputs
    const getBMR = () => {
        if (sex === 'Male') {
            const bmr = 66.5 + (13.75 * parseFloat(weightInKG)) + (5.003 * parseFloat(heightInCM)) - (6.75 * age);
            return Math.round(bmr * parseFloat(!the_activity ? activity : the_activity));
            
        } else if (sex === 'Female'){
            const bmr = 655.1 + (9.563 * parseFloat(weightInKG)) + (1.850 * parseFloat(heightInCM)) - (4.676 * age);
            return Math.round(bmr * parseFloat(!the_activity ? activity : the_activity));
        }
    };

    const macroDetails = () => {

        let carbPreset  = 0.5;
        let protPreset  = 0.3;
        let fatPreset   = 0.2;

        switch (the_diet) {
            case "1":
                carbPreset  = 0.6;
                protPreset  = 0.25;
                fatPreset   = 0.15;  
                break;
            case "2":
                carbPreset  = 0.5;
                protPreset  = 0.3;
                fatPreset   = 0.2;  
                break;
            case "3":
                carbPreset  = 0.4;
                protPreset  = 0.3;
                fatPreset   = 0.3;    
                break;
            case "4":
                carbPreset  = 0.25;
                protPreset  = 0.45;
                fatPreset   = 0.3;     
                break;
            default:
                carbPreset  = 0.5;
                protPreset  = 0.3;
                fatPreset   = 0.2; 
        }

        let carbGram = Math.round(carbPreset * getBMR() * 0.25);
        let protGram = Math.round(protPreset * getBMR() * 0.25);
        let fatGram = Math.round(fatPreset * getBMR() * 0.1111);

        let total = carbGram + protGram + fatGram;
        let protPerc = 0;
        let carbPerc = 0;
        let fatPerc = 0;
        // console.log(inputs[diet])
        carbPerc = Math.round((carbGram/total) * 100)
        protPerc = Math.round((protGram/total) * 100)
        fatPerc = Math.round((fatGram/total) * 100)
        console.log(carbPerc, protPerc, fatPerc);

        return (
            <div className='macro-nutrients'>
                <p>Carbohydrates: {carbGram} grams</p>
                <ProgressBar striped variant="secondary" animated now={carbPerc} />
                <p>Protein: {protGram} grams</p>
                <ProgressBar striped variant="danger" animated now={protPerc} />
                <p>Fat: {fatGram} grams</p>
                <ProgressBar striped variant="warning" animated now={fatPerc} />                
            </div>
        );
    };

    const theResult = () => {
        return (
        <div>
            <p>	Total Energy Expenditure: &nbsp;&nbsp;<span className='bmi'>{getBMR()} kcal/day</span></p>
        </div>
        )
      }

      const handleSubmit = async (event) => {
        event.preventDefault();
        setDisabled(true);

        try {
            let passActivity = !the_activity ? activity : the_activity
            let passDiet = !the_diet ? diet : the_diet
            const body = {passActivity, passDiet};

            const response = await fetch(
                "https://somactive-server-test.herokuapp.com/macroupdate",
                {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json",
                        Authorization: "Bearer " + localStorage.getItem('token')
                    },
                    body: JSON.stringify(body)
                }
            )
            
            const parseRes = await response.json()
            setShowMacroAlert(true);
            console.log(parseRes);

        } catch (error) {
            // window.location.reload();
            window.scrollTo(0, 0);
            console.log(error.message + ' nopes')
        }
        // setResult(
        //     <div>
        //     <div className='tdee'>
        //         {theResult()}
        //     </div>
        //     <div className='macro'>
        //     {macroDetails()}
        //     </div>
        //     </div>
        //     )
        }

    return (
        <>
        <h2>Macro Overview</h2>
        <p className="bmi-p">Click save to set your goal!</p>
        {/* <p className="bmi-p">Age: <strong>{age}</strong></p>
        <p className="bmi-p">Weight (kg): <strong>{weightInKG}</strong></p>
        <p className="bmi-p">Height (cm): <strong>{heightInCM}</strong></p> */}
        <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon2">Activity</InputGroup.Text>
            <Form.Select required onChange={e => onChange(e)} name="the_activity" aria-label="Default select example" value={!the_activity ? activity : the_activity}>
                <option value={1.2}>Little to no exercise</option>
                <option value={1.375}>Light exercise (1 to 3 days per week)</option>
                <option value={1.55}>Moderate exercise (3 to 5 days per week)</option>
                <option value={1.725}>Heavy exercise (6 to 7 days per week)</option>
                <option value={1.9}>Very heavy exercise (twice per day, extra heavy workouts)</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">Diet</InputGroup.Text>
                <Form.Select required onChange={e => onChange(e)} name="the_diet" aria-label="Default select example" value={!the_diet ? diet: the_diet}>
                    <option value={1}>High-Carb (60/25/15)</option>
                    <option value={2}>Moderate (50/30/20)</option>
                    <option value={3}>Zone Diet (40/30/30)</option>
                    <option value={4}>Low-Carb (25/45/30)</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">This field is required.</Form.Control.Feedback>
            </InputGroup>
            {showMacroAlert ? <Alert variant="success" onClose={() => setShowMacroAlert(false)} dismissible>
                    Macro updated.
                </Alert> : null}
            <Button type="submit" variant="danger" onClick={handleSubmit} disabled={disabled}>
            Save
            </Button>
            
        <div className="bmi-overview">
            <div className='tdee'>
                    {theResult()}
                </div>
                <div className='macro'>
                {macroDetails()}
                </div>
        </div>
        </>
    )
}

export default MacroDashboard;