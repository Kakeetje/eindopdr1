import React from 'react';
import './PagesCSS/Home.css';

function Home() {
    return (
        <>
        <div>
            <h1 className="Welkom">
                Welkom bij Yang Yang Sushi Eindhoven
            </h1>
        </div>
        <div className="quick-order">
            <p>Bestel hier uw sushi</p>
            <form>
                <h3>
                    Voer hier uw postcode in
                </h3>
                <label>
                    Postcode
                    <input type="text" name="postcode" />
                </label>
                <button className="Bestellen">Bestellen</button>
            </form>
        </div>
         </>
    );
}

export default Home;
