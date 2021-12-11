import React, { Component } from 'react';
import Answer from "./Answer.js"

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { answers: [{ id: `${this.props.id}-a1` }] };
  }

  onAddAnswer = () => {
    let qCount = this.state.answers.length + 1;
    const arr = [...this.state.answers, { id: `${this.props.id}-a${qCount}` }];
    this.setState({ answers: arr });
  }

  onRemoveAnswer = () => {
    const arr = [...this.state.answers];
    arr.pop();
    this.setState({ answers: arr });
  }

  renderAnswers = () => {
    return this.state.answers.map(({ id }) => {
      return <Answer id={id} />
    })
  }


  render() {
    return (
      <div>

        <div className="accordion-header">
          <button className="accordion-button collapsed"
            data-bs-toggle="collapse" type="button" data-bs-target={`#${this.props.id}-a${this.state.id}`}>
            <div className="input-group mb-3">
              <span className="input-group-text">Question:</span>
              <input className="form-control" type="text" aria-label="Question 1 input" aria-describedby="Q1-input"></input>
            </div>
          </button >
        </div>

        <div className="accordion-item accordion-collapse collapse" id={`${this.props.id}-a${this.state.id}`}>
          <button type="button" className="btn btn-primary"
            onClick={this.onAddAnswer}>Add Answer</button>
          <button type="button" className="btn btn-danger"
            onClick={this.onRemoveAnswer}>Remove Answer</button>
          <div className="accordion-header">
            {this.renderAnswers()}
          </div>
        </div>

      </div >
    );
  }
}

export default Question;