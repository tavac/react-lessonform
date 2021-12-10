import React, { Component } from 'react';

import Question from "./Question.js"

class Lesson extends Component {

  constructor(props) {
    super(props);
    this.state = { questions: [{ id: `${this.props.id}-Q1` }] };
  }

  onAddQuestion = () => {
    let qCount = this.state.questions.length + 1;
    const arr = [...this.state.questions, { id: `${this.props.id}-Q${qCount}` }];
    this.setState({ questions: arr });
  }

  renderQuestions = () => {
    return this.state.questions.map((question) => {
      return <Question id={question.id} />
    })
  }

  render() {
    return (
      <div className="accordion-item" id="lesson-collapse-template">

        <h2 className="accordion-header">
          <button className="accordion-button collapsed btn-dark" data-bs-target={`#${this.props.id}`} data-bs-toggle="collapse"
            type="button">
            <div className="input-group mb-3">
              <span className="input-group-text" >Lesson Title:</span>
              <input className="form-control" type="text" defaultValue={this.props.name} />
            </div>
          </button>
        </h2>

        <div className="accordion-item accordion-collapse collapse" id={`${this.props.id}`}>
          <div className="accordion-header">
            <button type="button" className="btn btn-primary"
              onClick={this.onAddQuestion}>Add Question</button>
            {this.renderQuestions()}
          </div>
        </div>

      </div>
    );
  }
}

export default Lesson;