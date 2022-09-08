import Pagination from "./Pagination";
import ProductDisplay from "./ProductDisplay";

const ProductCards = () => {
    const productList = [
        { name: "Large Shirt", price: "$10.00", desc: "This is a large shirt" },
        { name: "Small Shorts", price: "$3.00", desc: "This is a small short" },
        { name: "Medium Jacket", price: "$6.50", desc: "This is a medium jacket" },
        { name: "XL Hoodie", price: "$31.20", desc: "This is an extra-large hoodie" }
    ];

    return (
        <div>
            {productList.map(prod => {
                //SETTING THE LIMIT OF PRODUCT CARDS TO 3 PRODUCTS PER PAGE
                if (productList.indexOf(prod) < 3) {
                    return (
                        <ProductDisplay name={prod.name} price={prod.price} desc={prod.desc}/>
                    );
                } else {
                    return (
                        <Pagination />
                    );
                }     
            })}
        </div>
    );
    
}

export default ProductCards;