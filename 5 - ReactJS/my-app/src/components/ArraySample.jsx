// const theArray = [<p>hello</p>, <p>there!</p>, <small>-General Kenobi</small>];
// const ArraySample = () => {
//     return (
//         <div>
//             {theArray}
//         </div>

import Greeter from "./Greeter";

        
//     );
// }

// const ArraySample = () => {
//     const theArray = ['Cats', 'Dogs', 'Eel'];
//     return (
//         <div>
//             <ul>
//                 {theArray.map(animal => <li>I like {animal}</li>)}
//             </ul>
//         </div>
//     );
// };

const ArraySample = () => {
    const userList = [
        { name: "John Doe", greeting: "Hello there!" },
        { name: "Juan Dela Cruz", greeting: "Kamusta!"},
        { name: "Jose Miguel", greeting: "Hola!"}
    ];
    
    return (
        <div>
    	{userList.map(user => 
        	<Greeter name={user.name} greeting={user.greeting} />
        )}
        </div>
    );
}

export default ArraySample;

//KEYS
// good, unique and stable
// const someComponents = uniqueNumbers.map(number => 
// 	<li key={number.toString()}>{number}</li>
// )