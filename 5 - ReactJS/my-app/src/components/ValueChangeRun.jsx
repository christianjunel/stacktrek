import { useState, useEffect } from "react";

const ValueChangeRun = props => {
    const [bip, setBip] = useState(0);
    const [bop, setBop] = useState(0);

    useEffect(() => console.log('Bip!'), [bip]);
    useEffect(() => console.log('Bop!'), [bop]);
    useEffect(() => console.log('Bipbop!'), [bip, bop]);

    return (
        <div>
            <button onClick={() => setBip(bip + 1)}>Bip: {bip}</button>
            <button onClick={() => setBop(bop + 1)}>Bop: {bop}</button>
        </div>
    );
}

export default ValueChangeRun;