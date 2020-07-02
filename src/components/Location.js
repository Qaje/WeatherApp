import React from 'react';

const Location = ({city}) =>(
    //Destructuring ESV6
    // const { city } = props;
    <div>
        <h1>
            {city}
        </h1>
    </div>
);

export default Location;