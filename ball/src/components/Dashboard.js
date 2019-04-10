import React from 'react';

const Dashboard = props => {
    return (
        <div>
            <h2>Dashboard Component Alive</h2>
            <button
                onClick={props.handleStrike}
            >Strike</button>

            <button
                onClick={props.handleBall}
            >Ball</button>

            <button>Foul</button>

            <button>Hit</button>
        </div>
    )
}

export default Dashboard