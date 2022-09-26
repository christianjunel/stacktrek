import { useState, useEffect } from "react";

const APIViewer = props => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [valid, setValid] = useState(true);

    const [list, setList] = useState([]);

    const handleChange = e => {
        setUrl(e.target.value);
    }

    useEffect(() => {
        setLoading(true);
        setValid(true);
        setError(false);

        fetch(url)
        .then(res => {
            if (!res.ok) {
                setValid(false);
                return [];
            }

            return res.json();
        })
        .then(res => setList(res))
        .catch(err => setError(true))
        .finally(res => setLoading(false))

    },[url]);

    const output = (
        <div>
            {loading ? 
                'Loading...' :
             !valid ?
                'API seems to be not working...':
             error ?
                'Sorry, something went wrong...':
                list.map(obj => JSON.stringify(obj))
            }
        </div>
    )

    return (
        <div>
            URL: <input name="url" 
                     onChange={handleChange}
                     placeholder="Enter an API!" 
                 />
            <hr />
            {output} 
        </div>
    )         

}

export default APIViewer;