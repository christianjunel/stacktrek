const cardStyle = {
    border: '2px solid lightgrey'
}

const Card = ({children}) => {
    return (
        <div style={cardStyle}>
            {children}
        </div>
    );
}

export default Card;