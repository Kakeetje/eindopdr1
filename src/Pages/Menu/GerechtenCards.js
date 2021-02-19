import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './GerechtenCards.css';
import Products from '../../Products';
import ShoppingCart from "../Components/ShoppingCart";

export default function GerechtenCards(props) {
    const [gerecht, setGerecht] = useState();

    useEffect(() => {
        async function getGerechtData() {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`);
            setGerecht(result.data);
        }
        getGerechtData();

    },[props.name]);

    console.log(gerecht?.types);
    return (
        <div className="card">
            <h1>{gerecht?.name}</h1>
            <img
                className="sprite"
                alt={gerecht?.name}
                src={gerecht?.sprites.front_default}
            />
            <ShoppingCart/>
        </div>
    );
}

