// import { useState, useEffect } from "react";

// const PostViewer = props => {
//     const [posts, setPosts] = useState([]);
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(res => setPosts(res))
//     },[]);

//     return (
//         <div>
//             {posts.map(({title, body}) => 
//                 <div key={title}>
//                     <h1>{title}</h1>
//                     <p>{body}</p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default PostViewer;

import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const PostViewer = props => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    let { username } = useParams();
    useEffect(() => {
        setLoading(true);
        setError(false);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                if (!res.ok) {
                    setError(true);
                    return [];
                } 
                return res.json();
                
            })
            .then(res => setPosts(res))
            .catch(err => setError(true))
            .finally(() => setLoading(false))
    }, []);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Uh oh! Something went wrong...</div>

    return (
    	<div>
            <h1>{username}</h1>
        	{posts.map(({ title, body }) => 
            	<div key={title}>
                	<h1>{title}</h1>
                    {body}
                </div>
            )}
        </div>
    )
}

export default PostViewer;