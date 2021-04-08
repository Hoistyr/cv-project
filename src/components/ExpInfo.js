import React from 'react';

class ExpInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expInfo: [],
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.clearText = this.clearText.bind(this);
  }

  clearText(event) {
    console.log(event.target);
    event.target.value = '';
  }

  handleMouseEnter(event) {
    let form = event.target;
    if (!form.classList.contains('expFormHolder')) {
      form = form.parentNode;
      if (!form.classList.contains('expFormHolder')) {
        form = form.parentNode;
        if (!form.classList.contains('expFormHolder')) {
          form = form.parentNode;
        }
      }
    }
    form.classList.add('hoverEdit');
    const icons = form.querySelectorAll('.actionIcon');
    icons.forEach((icon) => {
      icon.classList.remove('hidden');
    });
  }

  handleMouseLeave(event) {
    let form = event.target;    
    if (!form.classList.contains('expFormHolder')) {
      form = form.parentNode;
      if (!form.classList.contains('expFormHolder')) {
        form = form.parentNode;
        if (!form.classList.contains('expFormHolder')) {
          form = form.parentNode;
        }
      }
    }
    
    form.classList.remove('hoverEdit');
    const icons = form.querySelectorAll('.actionIcon');
    icons.forEach((icon) => {
      icon.classList.add('hidden');
    });
  }

  render () {
    let expArray = '';
    if (this.props.expShip.expArray.length) {
      expArray = this.props.expShip.expArray;
    }

    const defaultForm = 
    <div className="expFormHolder">
      <form className="expForm">
        <label htmlFor="position">
          <input type="text" name="position" placeholder="Job Position"/>
        </label>
        <label htmlFor="company">
          <input type="text" name="company" placeholder="Company Name"/>
        </label>
        <label htmlFor="city">
          <input type="text" name="city" placeholder="Company City"/>
        </label>
        <label htmlFor="startDate">
          <input type="text" name="startDate" placeholder="Starting Date"/>
        </label>
        <label htmlFor="endDate">
          <input type="text" name="endDate" placeholder="Ending Date or Current"/>
        </label>
        <label htmlFor="jobTasks">
          <textarea name="jobTasks" placeholder="Write a little bit about your responsibilites and acheivements there"/>
        </label>
        {this.props.saveButton}
      </form>
    </div>

  const editForm = (form) => {
    const finishedForm =
    <div className="expFormHolder" key={form.id} formid={form.id}>
      <form className="expForm">
        <label htmlFor="position">
          <input type="text" name="position" defaultValue={form.position}placeholder="Job Position"/>
        </label>
        <label htmlFor="company">
          <input type="text" name="company" defaultValue={form.company} placeholder="Company Name"/>
        </label>
        <label htmlFor="city">
          <input type="text" name="city" defaultValue={form.city} placeholder="Company City"/>
        </label>
        <label htmlFor="startDate">
          <input type="text" name="startDate" defaultValue={form.startDate} placeholder="Starting Date"/>
        </label>
        <label htmlFor="endDate">
          <input type="text" name="endDate" defaultValue={form.endDate} placeholder="Ending Date or Current"/>
        </label>
        <label htmlFor="jobTasks">
          <textarea name="jobTasks" defaultValue={form.jobTasks} placeholder="Write a little bit about your responsibilites and acheivements there"/>
        </label>
        {this.props.saveEdit}
      </form>
    </div>
    return finishedForm;
  }
    
    const viewForm = (form) => {
      console.log('in viewform');
      const finishedForm =
      <div className="expFormHolder infoForm" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} key={form.id} formid={form.id}>
        <div className="iconDiv">
          {this.props.handleEdit}
          {this.props.handleDelete}
        </div>
        
        <form className="expForm">
          <p className="expPosition">{form.position}</p>
          <p className="expCompany">{form.company}</p>
          <p className="expCity">{form.city}</p>
          <p className="expStartDate">{form.startDate}</p>
          <p className="expEndDate">{form.endDate}</p>
          <p className="expJobTasks">{form.jobTasks}</p>
        </form>
    </div>;
      return finishedForm;
    }

    let returnForm = defaultForm;
    if (expArray.length > 0) {
      returnForm = expArray.map((form) => {
        console.log('exparray form ', form);
        if (form.viewing === true) {
          console.log('return viewing');
          return viewForm(form);
        }
        if (form.editing === true) {
          return editForm(form);
        }
        return defaultForm;
      });
    }
    
    return (
      <div className="expInfo">
        <h1>Experience:</h1>
        {returnForm}
        {this.props.addExperienceButton}
    </div>
    )
  }
}

export default ExpInfo;