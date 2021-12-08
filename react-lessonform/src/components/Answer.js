import React, { Component } from 'react';

class Answers extends Component {
  render() {
    return (
      <div className="input-group input-group-sm">
        <span className="input-group-text" id="Q1A1-input">A:</span>
        <input className="form-control" type="text" aria-label="Question 1 Answer 1 Input"
          aria-describedby="Q1A1-input"></input>
      </div>
    );
  }
}

export default Answers;