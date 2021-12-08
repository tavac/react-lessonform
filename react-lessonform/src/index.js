import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lessonCount: 0 };
  }

  render() {
    <form action="" method="post" onSubmit="">
      <div className="flex-md-shrink-1 justify-content-center py-3">
        <label className="form-label" htmlFor="course-title-input">Course Title</label>
        <input className="form-control" id="course-title-input" placeholder="Course Title" type="text"></input>
        <button className="btn btn-primary" type="button"
          onClick={() => addLesson("lesson-collapse", lessonCount)}>Add Lesson</button>
      </div>

      <div className="flex-md-shrink-1 justify-content-center">
        <div className="accordion accordion">
          <div className="accordion-item" id="lesson-collapse">

          </div>
        </div>
      </div>
    </form >
  }
}


class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lessonID: "L" + (++lessonNumber) + "-input"
    }
  }

  render() {
    return (
      <h2 class="accordion-header">
        <button className="accordion-button collapsed btn-dark" data-bs-target="#L1-Section" data-bs-toggle="collapse"
          type="button">
          <div className="input-group mb-3">
            <span className="input-group-text" id="${lessonID}" >Lesson Title:</span>
            <input className="form-control" type="text" aria-label="Lesson 1 Title" aria-describedby="L1-input"></input>
          </div>
        </button>
      </h2>
    );
  }
}

class Question extends React.Component {
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

class Answers extends React.Component {
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

function addLesson(_id, _count) {
  render(<Lesson></Lesson>, document.getElementById(_id));
}


// ========================================

ReactDOM.render(
  <div className="container-sm col-5">

  </div >,
  document.getElementById('root')
);
