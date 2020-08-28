import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'

class EvenClicks extends Component {
    constructor(props) {
        super(props);

        this.state = { clicks: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { clicks } = this.state;
        this.setState({ clicks: clicks + 1 });
    }

    isEven() {
        const { clicks } = this.state;
        return clicks % 2 === 0 ? "Even" : "Odd"; 
    }

    render() {

        return(
            <>
                <Button variant="primary" onClick={ this.handleClick }>
                    { this.isEven() }
                </Button>
            </>
        );
    }
}

export default EvenClicks;