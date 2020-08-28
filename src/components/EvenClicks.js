import React, { Component } from 'react';

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
                <button 
                    className="btn btn-primary"
                    onClick={ this.handleClick }
                >
                    { this.isEven() }
                </button>
            </>
        );
    }
}

export default EvenClicks;