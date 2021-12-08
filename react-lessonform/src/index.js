import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Course from "./components/Course.js"
import Lesson from "./components/Lesson.js"
import Question from "./components/Question.js"
import Answer from "./components/Answer.js"


// ========================================

ReactDOM.render(
  <div className="container-sm col-5">
    <Course>
      <Lesson>
        <Question>
          <Answer></Answer>
        </Question>
      </Lesson>
    </Course>
  </div >,
  document.getElementById('root')
);
