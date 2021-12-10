import React, { Component } from 'react';

class Question extends Component {
  render() {
    return (
      <button className="accordion-button collapsed"
        data-bs-toggle="collapse" type="button" id={`${this.props.id}`}>
        <div className="input-group mb-3">
          <span className="input-group-text">Question:</span>
          <input className="form-control" type="text" aria-label="Question 1 input" aria-describedby="Q1-input"></input>
        </div>
      </button >
    );
  }
}

export default Question;