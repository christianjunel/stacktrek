import './styles/Home.css';
// import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom"
import BMIModal from './BMIModal';

const Home = props => {
    
    return(
        <div>
            <div className='banner-image d-flex justify-content-center align-items-center'>    
                    <div className="flexbox-item-row-1 main-title">
                        <h1 className='text-white title'>Workout And Eat Healthily Using SomActive.</h1>
                        <p className='text-white sub-title'>The SomActive app is a web-based platform that you can use to do some home workouts while unable to go to the gym. Curious about your BMI? Go ahead!</p>
                        <BMIModal />
                    </div>
                    <div className="flexbox-item-row-1 img-trainer">
                        {/* <img id='hero-png' src={trainers} alt="healthy body"/> */}
                    </div>           
            </div>    

            <div className="flexbox-container-two-columns">
                    <div className="flexbox-item flexbox-item1">
                        <h2 id="h-workout-benefits">Get Some Workout Benefits</h2>
                        <p>We have all heard it many times before - regular exercise is good for you, and it can help you lose weight.</p>
                    </div>
                    <div className="flexbox-container-two-columns">
                        <div className="flexbox-column-1">
                            <div className="flexbox-item-2 flexbox-item-2-1">
                                <h2><img src="https://img.icons8.com/ios-glyphs/40/d50c3a/energy-care.png" alt="energy"/> Energic Life</h2>
                                <p>Take the boost of energy you feel when you're working a sweat by living an active life, for instance. Your passion will save you!</p>
                            </div>
                            <div className="flexbox-item-2 flexbox-item-2-2">
                                <h2><img src="https://img.icons8.com/ios-filled/40/d50c3a/body.png" alt="healthy body"/> Healthy Body</h2>
                                <p>Exercise delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently.</p>
                            </div>
                        </div>
                        <div className="flexbox-column-2">
                            <div className="flexbox-item-2 flexbox-item-3-1">
                                <h2><img src="https://img.icons8.com/ios-filled/40/d50c3a/cool.png" alt="confident"/> More Confident</h2>
                                <p>Confidence isn't about feeling superior to others. It's a quiet inner knowledge that you're capable. Confident people: feel secure rather than insecure.</p>
                            </div>
                            <div className="flexbox-item-2 flexbox-item-3-2">
                                <h2><img src="https://img.icons8.com/glyph-neue/40/d50c3a/flex-biceps.png" alt="strong muscle"/> Self-Esteem</h2>
                                <p>In addition to building physical strength, exercise can improve mental health. It's been shown to reduce depression, anxiety and negative moods.</p>
                            </div>
                        </div>
                    </div>  
                </div>        
        </div>
    );
}

export default Home;