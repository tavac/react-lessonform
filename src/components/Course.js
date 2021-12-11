import React, { Component } from 'react';

import Lesson from "./Lesson.js"

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = { lessons: [{ id: `l1`, name: "Lesson1" }] };
  }

  onAddLesson = () => {
    let lCount = this.state.lessons.length + 1;
    const arr = [...this.state.lessons, {
      id: `l${lCount}`,
      name: `Lesson${lCount}`
    }];
    this.setState({ lessons: arr });
  }

  onRemoveLesson = () => {
    const arr = [...this.state.lessons];
    arr.pop();
    this.setState({ lessons: arr });
  }

  renderLessons = () => {
    return this.state.lessons.map((lesson) => {
      return <Lesson id={lesson.id} name={lesson.name} />
    })
  }

  render() {
    return (
      <form action="" method="post" onSubmit="">
        <div className="flex-md-shrink-1 justify-content-center py-3">
          <label className="form-label" htmlFor="course-title-input">Course Title</label>
          <input className="form-control" id="course-title-input" placeholder="Course Title" type="text"></input>
          <button className="btn btn-primary" type="button"
            onClick={this.onAddLesson}>Add Lesson</button>
          <button className="btn btn-danger" type="button"
            onClick={this.onRemoveLesson}>Remove Lesson</button>
        </div>

        <div className="flex-md-shrink-1 justify-content-center">
          <div className="accordion accordion">
            {this.renderLessons()}
          </div>
        </div>
      </form >
    )
  }
}

export default Course;