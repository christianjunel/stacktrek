const HappySubmit = ({onClick, message}) => {
    const  handleClick = e => {
        e.preventDefault();
        alert(message);
        onClick(e);
    }
    return <input type="submit" value="Happy Submit" onClick={handleClick} />

};

export default HappySubmit;