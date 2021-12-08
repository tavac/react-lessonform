import React, { Component } from 'react';
import Lesson from "./Lesson.js"

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = { lessonCount: 0 };
  }

  // addLesson(_id, _count) {
  //   render(<Lesson></Lesson>, document.getElementById(_id));
  // }

  render() {
    return (
      <form action="" method="post" onSubmit="">
        <div className="flex-md-shrink-1 justify-content-center py-3">
          <label className="form-label" htmlFor="course-title-input">Course Title</label>
          <input className="form-control" id="course-title-input" placeholder="Course Title" type="text"></input>
          <button className="btn btn-primary" type="button"
            onClick={() => { }}>Add Lesson</button>
        </div>

        <div className="flex-md-shrink-1 justify-content-center">
          <div className="accordion accordion">
            <div className="accordion-item" id="lesson-collapse">

            </div>
          </div>
        </div>
      </form >
    )
  }
}

export default Course;