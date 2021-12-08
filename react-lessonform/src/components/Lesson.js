import React, { Component } from 'react';

class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessonID: "L1-input"
    }
  }

  render() {
    return (
      <h2 class="accordion-header">
        <button className="accordion-button collapsed btn-dark" data-bs-target="#L1-Section" data-bs-toggle="collapse"
          type="button">
          <div className="input-group mb-3">
            <span className="input-group-text" id={`L${this.props.id}-input`} >Lesson Title:</span>
            <input className="form-control" type="text" aria-label="Lesson 1 Title" aria-describedby="L1-input" value={this.props.name}></input>
          </div>
        </button>
      </h2>
    );
  }
}

export default Lesson;