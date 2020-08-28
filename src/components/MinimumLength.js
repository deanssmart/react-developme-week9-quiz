import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'

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
            <Form>
                <Form.Group controlId="formInput">
                    <Form.Label>Length Check:</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Type in me..."
                        onChange={ this.handleChange }
                        value={ input }
                    />
                    <Form.Text className="text-muted">
                        { this.lengthCalc(length) }
                    </Form.Text>
                </Form.Group>
            </Form>            
        );
    }
}

export default MinimumLength;

