const Destruct = (props) => {
    const {active, activeStatus} = props;
    return (
        <div>
            <div>
                <h1>{active}</h1>
            </div>
            <div>
                <h2>{activeStatus}</h2>
            </div>
        </div>
    );
}

export default Destruct;