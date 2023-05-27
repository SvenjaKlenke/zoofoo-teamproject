import React from 'react';

type Props = {
    temperature: string;
}

function Weather(props: Props) {

    return (
        <div>
            {props.temperature !== null ? (
                <div>
                    <h3>actual temperature:</h3>
                    <p>{props.temperature} *C</p>
                </div>
            ) : (
                <p>load temperature...</p>
            )}
        </div>
    );
}

export default Weather;