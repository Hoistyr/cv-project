import React from 'react';

class EdInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edInfo: [],
    }
    
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(event) {
    let form = event.target;
    if (!form.classList.contains('edFormHolder')) {
      form = form.parentNode;
      if (!form.classList.contains('edFormHolder')) {
        form = form.parentNode;
        if (!form.classList.contains('edFormHolder')) {
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
    if (!form.classList.contains('edFormHolder')) {
      form = form.parentNode;
      if (!form.classList.contains('edFormHolder')) {
        form = form.parentNode;
        if (!form.classList.contains('edFormHolder')) {
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
    let edArray = '';
    if (this.props.edShip.edArray.length) {
      edArray = this.props.edShip.edArray;
    }
    
    const defaultForm = 
    <div className="edFormHolder">
        <form className="edForm">
          <label htmlFor="schoolName">
            <input type="text" name="schoolName" placeholder="University Name"/>
          </label>
          
          <label htmlFor="city">
            <input type="text" name="city" placeholder="City"/>
          </label>

          <label htmlFor="state">
            <input type="text" name="state" placeholder="State"/>
          </label>
          
          <label htmlFor="degreeType">
            <input type="text" name="degreeType" placeholder="Degree Type: MA, BS, PhD, etc"/>
          </label>
          
          <label htmlFor="subject">
            <input type="text" name="subject" placeholder="Degree Subject: (Computer Science, Communication, etc)"/>
          </label>
          
          <label htmlFor="startDate">
          <input type="text" name="startDate" placeholder="Date Started"/>
          </label>
          
          <label htmlFor="endDate">
            <input type="text" name="endDate" placeholder="Date Received"/>
          </label>
          
          {this.props.saveButton}
        </form>
    </div>

  const editForm = (form) => {
    const finishedForm =
    <div className="edFormHolder" key={form.id} formid={form.id}>
        <form className="edForm">
          <label htmlFor="schoolName">
            <input type="text" name="schoolName" defaultValue={form.schoolName} placeholder="University Name"/>
          </label>
          
          <label htmlFor="city">
            <input type="text" name="city" defaultValue={form.city} placeholder="City"/>
          </label>

          <label htmlFor="state">
            <input type="text" name="state" defaultValue={form.state} placeholder="State"/>
          </label>
          
          <label htmlFor="degreeType">
            <input type="text" name="degreeType" defaultValue={form.degreeType} placeholder="Degree Type: MA, BS, PhD, etc"/>
          </label>
          
          <label htmlFor="subject">
            <input type="text" name="subject" defaultValue={form.subject}placeholder="Degree Subject: (Computer Science, Communication, etc)"/>
          </label>
          
          <label htmlFor="startDate">
          <input type="text" name="startDate" defaultValue={form.startDate} placeholder="Date Started"/>
          </label>
          
          <label htmlFor="endDate">
            <input type="text" name="endDate" defaultValue={form.endDate}placeholder="Date Recieved"/>
          </label>
          
          {this.props.saveEdit}
        </form>
    </div>
    return finishedForm;
  }
    
    const viewForm = (form) => {
      console.log('in viewform');
      const finishedForm =
      <div className="edFormHolder infoForm" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} key={form.id} formid={form.id}>
        <div className="iconDiv">
          {this.props.handleEdit}
          {this.props.handleDelete}
        </div>
        
        <form className="edForm">
          <p className="edSchoolName">{form.schoolName}</p>
          <p className="edCity">{form.city}</p>
          <p className="edState">{form.state}</p>
          <p className="edDegreeType">{form.degreeType}</p>
          <p className="edDegreeSubject">{form.subject}</p>
          <p className="edFrom">{form.from}</p>
          <p className="edTo">{form.to}</p>
        </form>
    </div>;
      return finishedForm;
    }

    let returnForm = defaultForm;
    if (edArray.length > 0) {
      returnForm = edArray.map((form) => {
        console.log('edarray form ', form);
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
      <div className="edInfo">
        <h1>Education:</h1>
        {returnForm}
        {this.props.addEducationButton}
    </div>
  )
  }
}

export default EdInfo;