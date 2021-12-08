import React, { Component } from 'react';

import Lesson from "./Lesson.js"

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = { lessons:[{id: 1, name:"lesson1"}] };
  }
  
  onAddLesson  = ()=>{
    const arr = [...this.state.lessons,{name:""}]
    this.setState({lessons:arr})
  }

  renderLessons = ()=>{
    return this.state.lessons.map((lesson)=>{      
      return <Lesson id={lesson.id} name={lesson.name}/>
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
        </div>

        <div className="flex-md-shrink-1 justify-content-center">
          <div className="accordion accordion">
            <div className="accordion-item" id="lesson-collapse">
              {this.renderLessons()}
            </div>
          </div>
        </div>
      </form >
    )
  }
}

export default Course;