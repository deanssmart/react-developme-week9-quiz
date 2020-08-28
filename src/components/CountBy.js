import React, { Component } from 'react';

class CountBy extends Component {
    constructor(props) {
        super(props);

        this.state = { number: 0 }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { number } = this.state;
        const { step } = this.props;

        this.setState({ number: number + +step });
        
    }

    render() {
        const { number } = this.state;

        return (
            <p onClick={ this.handleClick } className="mt-4">
                { number }                
            </p>
        );
    }
}

export default CountBy;