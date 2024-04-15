// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { buyCake, restockCakes} from './../actions/CakeActions';

// export const Cake = () => {
//     const dispatch = useDispatch();
//     const cakes = useSelector((state) => state.CakeReducer.cakes);
//     const message = useSelector((state) => state.CakeReducer.message);

//     return (
//         <div id="cake">
//             <h2>Cakes: {cakes}</h2>
//             {message !== undefined && <p>{message}</p>}
//             <button disabled={cakes < 1} onClick={() => { dispatch(buyCake(1)) }}>Buy 1 Cake</button>
//             <button disabled={cakes < 2} onClick={() => { dispatch(buyCake(2)) }}>Buy 2 Cake</button>
//             <button disabled={cakes < 3} onClick={() => { dispatch(buyCake(3)) }}>Buy 3 Cake</button>
//             <button onClick={() => { dispatch(restockCakes()) }}>Restock Cakes</button>
//         </div>
//     );
// };

// Da se zamenat buttons za buy cake i restock cakes so input field kade ke se vnese brojka i ke se odzeme/dodade soodvetno toj broj na torti od vkupniot
// (vnimavajte na validacii i vnes vo input)

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, restockCakes } from "./../actions/CakeActions";

export const Cake = () => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const cakes = useSelector((state) => state.CakeReducer.cakes);
    const message = useSelector((state) => state.CakeReducer.message);

    const handleBuyCake = () => {
        if (quantity > 0 && cakes >= quantity) {
            dispatch(buyCake(quantity));
            setQuantity(1);
        } else {
            alert("Not enough cakes!");
        }
    };

    const handleRestockCakes = () => {
        dispatch(restockCakes());
        setQuantity(1);
    };

    return (
        <div id="cake">
            <h2>Cakes: {cakes}</h2>
            {message !== undefined && <p>{message}</p>}
            <div>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    min="1"
                />
                <button onClick={handleBuyCake}>Buy Cake(s)</button>
                <button onClick={handleRestockCakes}>Restock Cakes</button>
            </div>
        </div>
    );
};

