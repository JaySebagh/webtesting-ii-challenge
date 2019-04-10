import React from 'react';

class Display extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            balls: 0,
            strike: 0,
        }
    }

    render() {
        return (
            <div>
                <h2>Display Component Alive</h2>
                <p>Balls: {this.state.balls}</p>
                <p>Strike: {this.state.strike}</p>
            </div>
        )
    }
}

export default Display