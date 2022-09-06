const username = "username";
const textInput = <input type="text" name={username} id={username} />;
const someFunction = () => alert('Hello');

const form = (
    <form>
        {textInput}
        <label>{username}</label>
        <button onClick={someFunction}>Click to say Hello!</button>
    </form>
);

const FormSample = () => {
    return (
        <div>
            {form}
        </div>
    );
    
};

export default FormSample;