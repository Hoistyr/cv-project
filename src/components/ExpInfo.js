import React from 'react';

class ExpInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render () {
    return (
      <div className="expInfo">
        <form className="expForm">
          <h1>Professional Experience:</h1>
          <label htmlFor="position">
            Position:
            <input type="text" name="position"/>
          </label>
          <label htmlFor="company">
            Company:
            <input type="text" name="company"/>
          </label>
          <label htmlFor="city">
            City:
            <input type="text" name="city"/>
          </label>
          <label htmlFor="startDate">
            From:
            <input type="date" name="startDate" />
          </label>
          <label htmlFor="endDate">
            To:
            <input type="date" name="endDate" />
          </label>
          <label htmlFor="jobTasks">
            Responsibilities:
            <textarea name="jobTasks" defaultValue="Write a little bit about your responsibilites and acheivements there"/>
          </label>
          <button className="addExperienceBtn">Add</button>
          <button className="removeExperienceBtn">Remove</button>
        </form>
      </div>
    )
  }
}

export default ExpInfo;