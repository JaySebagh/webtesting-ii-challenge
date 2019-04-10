import React from 'react';
import Dashboard from './Dashboard.js'

class Display extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            balls: 0,
            strike: 0,
        }
    }

    handleStrike = () => {
        const incStrike = this.state.strike + 1
        const balls = this.state.balls
        if(incStrike === 3 || balls === 4) {
            this.setState({
                strike: 0,
                balls: 0
            })
        } else {
            this.setState({
                strike: incStrike
            })
        }
    }

    handleBall = () => {
        const incBalls = this.state.balls + 1
        const strike = this.state.strike
        if(incBalls === 4 || strike === 3) {
           this.setState({
               strike: 0,
               balls: 0
           }) 
        } else {  
            this.setState({
                balls: incBalls
            })
        }
    }

    render() {
        return (
            <div>
                <h2>Display Component Alive</h2>
                <p>Balls: {this.state.balls}</p>
                <p>Strike: {this.state.strike}</p>
                <Dashboard 
                    handleStrike={this.handleStrike}
                    handleBall={this.handleBall}
                />
            </div>
        )
    }
}

export default Display