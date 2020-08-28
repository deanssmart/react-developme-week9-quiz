import React, { Component } from 'react';

class MinimumLength extends Component {
    constructor(props) {
        super(props);

        this.state = { input: "" };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ input: e.currentTarget.value });
    }

    lengthCalc(length) {
        const { input } = this.state;

        return input.length < length ? "Too short!" : "";
    }

    render() {
        const { input } = this.state;
        const { length } = this.props;

        return(
            <form className="form-group">
                <input 
                    onChange={ this.handleChange }
                    value={ input }
                    className="form-control"
                />
                <p className="form-text text-muted">
                    { this.lengthCalc(length) }
                </p>                  
            </form>
        );
    }
}

export default MinimumLength;