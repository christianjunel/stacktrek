const someFunction = () => {
    return alert('Button clicked.');
};

const ButtonClick = ({children}) => {
    return (
        <button onClick={someFunction}>{children}</button>
    );
};

export default ButtonClick;

// const ButtonClick = ({ onClick, children }) => {
//     return (
//     	<div onClick={onClick}>
//             {children}
//         </div>
//     )
// }

// export default ButtonClick;