import "./styles/ProductDisplay.css";
const ProductDisplay = (props) => {
    return (
        <div className="card">
            <h1>{props.name}</h1>
            <p className="price">{props.price}</p>
            <p>{props.desc}</p>
            <p><button>Add to Cart</button></p>
        </div>
    );
}

export default ProductDisplay;