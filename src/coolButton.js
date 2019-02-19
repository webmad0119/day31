import React, { Component } from 'react';

class CoolButton extends Component {
    state = {
        nClickedTimes: 0
    }

    clickHandler = () => {
        this.setState({
            nClickedTimes: this.state.nClickedTimes + 1
        })
    }

    render() {
        if (this.state.nClickedTimes > 2) {
            return <button onClick={this.clickHandler} disabled>Click me!</button>
        } else {
            return <button onClick={this.clickHandler}>Click me!</button>
        }
    }
}

export default CoolButton;
