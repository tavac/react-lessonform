import React, { Component } from 'react';

class Question extends Component {
  render() {
    return (
      <button className="accordion-button collapsed" data-bs-target="#L1Q1-answers-collapse"
        data-bs-toggle="collapse" type="button">
        <div className="input-group mb-3">
          <span className="input-group-text" id="Q1-input">Question:</span>
          <input className="form-control" type="text" aria-label="Question 1 input" aria-describedby="Q1-input"></input>
        </div>
      </button>
    );
  }
}

export default Question;