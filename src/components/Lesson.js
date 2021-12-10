import React, { Component } from 'react';

import Question from "./Question.js"

class Lesson extends Component {

  constructor(props) {
    super(props);
    this.state = { questions: [{ id: `${this.props.id}-q1` }] };
  }

  onAddQuestion = () => {
    let qCount = this.state.questions.length + 1;
    const arr = [...this.state.questions, { id: `${this.props.id}-q${qCount}` }];
    this.setState({ questions: arr });
  }

  onRemoveQuestion = () => {
    this.state.questions.pop();
    const arr = [...this.state.questions];
    this.setState({ questions: arr });
  }

  renderQuestions = () => {
    return this.state.questions.map((question) => {
      return <Question id={question.id} />
    })
  }

  render() {
    return (
      <div className="accordion-item">

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
          <button type="button" className="btn btn-primary"
            onClick={this.onAddQuestion}>Add Question</button>
          <button type="button" className="btn btn-danger"
            onClick={this.onRemoveQuestion}>Remove Question</button>


          {this.renderQuestions()}
        </div>
      </div>

    );
  }
}

export default Lesson;