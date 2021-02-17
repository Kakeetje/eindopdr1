import React from 'react';

function Home() {
    return (
        <>
        <div>
            <h1>
                Welkom bij Yang Yang Sushi Eindhoven
            </h1>
            <p>Bestel hier uw sushi</p>
        </div>
        <div>
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
