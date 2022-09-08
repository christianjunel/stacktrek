const FancyPrint = ({someString}) => {
    const printThrice = someString => {
        console.log(someString);
        console.log(someString);
        console.log(someString);
    }

    return (
        <div>
            <button onClick={() => printThrice(someString.toLowerCase())}>Normal Print</button>
            <button onClick={() => printThrice(someString.toUpperCase())}>Upper Print</button>
            <button onClick={() => printThrice(someString)}>Lower Print</button>
        </div>
    );
}

export default FancyPrint;