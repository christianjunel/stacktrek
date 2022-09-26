import { useNavigate } from "react-router-dom";

const HelloWorld = () => {
    let navigate = useNavigate();
    return (
        <div>
            <h1>Hello World! Huehue.</h1>
            <br />
            <button onClick={() => navigate("/posts")}>Go to Posts</button>
        </div>
    )
}

export default HelloWorld;