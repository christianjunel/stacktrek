import HappySubmit from "./HappySubmit";

const LayeredEventHandling = props => {
    const handleSubmit = e => {
        alert('Form Submitted.');
        e.target.parentNode.reset();
    }

    return (
        <form>
            <label>Name: </label>
            <input type="text" name="name" />
        <HappySubmit onClick={handleSubmit} message="Thanks mate!" />
        </form>
    );
};

export default LayeredEventHandling;