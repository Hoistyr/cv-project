import React from 'react';

class EdInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render () {
    return (
      <div className="edInfo">
        <form className="edForm">
            <h1>Education:</h1>
            <label htmlFor="schoolName">
              University Name:
              <input type="text" name="schoolName"/>
            </label>
            <label htmlFor="degree">
              Degree:
              <input type="text" name="degree" defaultValue="Ex: MA, BS, PhD"/>
            </label>
            <label htmlFor="City">
              Subject:
              <input type="text" name="subject" defaultValue="Ex: Computer Science, Communication"/>
            </label>
            <label htmlFor="startDate">
            From:
            <input type="date" name="startDate" />
            </label>
            <label htmlFor="endDate">
              To:
              <input type="date" name="endDate" />
            </label>
            <button className="addEducationBtn">Add</button>
          <button className="removeEducationBtn">Remove</button>
          </form>
      </div>
    )
  }
}

export default EdInfo;