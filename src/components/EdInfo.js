import React from 'react';
import uniqid from 'uniqid';
import editIcon from '../images/icons/editIcon.svg';
import deleteIcon from '../images/icons/deleteIcon.svg';

class EdInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edInfo: [],
    }

    this.saveForm = this.saveForm.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  saveForm(event) {
    console.log('saveForm');
    event.preventDefault();
    const edInputs = event.target.parentNode.querySelectorAll('input');
    console.log(edInputs);
    let edObject = {};
    edInputs.forEach((input) => {
      edObject[input.name] = input.value
    });
    edObject['id'] = uniqid();
    edObject['viewing'] = true;
    edObject['editing'] = false;
    
    this.setState({edInfo: [...this.state.edInfo, edObject]});
    
    const removeIndex = this.state.edInfo.findIndex((form) => form.removeMe === true);
    if (removeIndex > -1) {
      const removeTempObject = this.state.edInfo.splice(removeIndex, 1);
      console.log('rto ', removeTempObject);
      this.setState({edInfo: removeTempObject});
      this.setState({edInfo: [...this.state.edInfo, edObject]});
    }
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

  handleEdit(event) {
    console.log('edit');
    const formHolderID = event.target.parentNode.parentNode.parentNode.attributes.formid.value;
    const changeToEdit = this.state.edInfo.map((form) => {
      if (form.id === formHolderID) {
        console.log('match');
        form.viewing = false;
        form.editing = true;
        return form;
      }
      return form;
    });
    console.log(changeToEdit);
    this.setState({edInfo: changeToEdit});
    
    // ADDME
    // get id
    // change form editing to true and viewing to false if id matches
  }

  saveEdit(event) {
    event.preventDefault();
    const formHolderID = event.target.parentNode.parentNode.attributes.formid.value;

    const edInputs = event.target.parentNode.querySelectorAll('input');
    const editedArray = this.state.edInfo.map((form) => {
      if (form.id === formHolderID) {
        edInputs.forEach((input) => {
          form[input.name] = input.value
        });
        form['viewing'] = true;
        form['editing'] = false;
        return form;
      }
      return form;
    })
    
    this.setState({edInfo: editedArray});
  }

  handleDelete(event) {
    console.log('delete');
    const formHolderID = event.target.parentNode.parentNode.parentNode.attributes.formid.value;
    const delArray =  this.state.edInfo.filter((form) => {
      if (form.id === formHolderID) {
        return false;
      }
      return true;
    });

    this.setState({edInfo: delArray});
  }

  addEducation(event) {
    event.preventDefault();
    console.log('inadded');
    const emptyEd = {
      editing: false,
      viewing: false,
      removeMe: true,
    }
    this.setState({edInfo: [...this.state.edInfo, emptyEd]});
  }
  render () {
    console.log('edInfo ', this.state.edInfo); 
    
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
          
          <button className="addEducationBtn" onClick={this.saveForm}>Save</button>
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
          
          <button className="addEducationBtn" onClick={this.saveEdit}>Save Edit</button>
        </form>
    </div>
    return finishedForm;
  }
    
    const viewForm = (form) => {
      console.log('in viewform');
      const finishedForm =
      <div className="edFormHolder infoForm" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} key={form.id} formid={form.id}>
        <div className="iconDiv">
          <div className="editButtonHolder" onClick={this.handleEdit}>
            <img className="editIcon actionIcon" src={editIcon} alt="Click this to edit" ></img>
          </div>
          <div className="deleteButtonHolder" onClick={this.handleDelete}>
            <img className="deleteIcon actionIcon" src={deleteIcon} alt="Click this to delete"></img>
          </div>
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
    console.log(this.state.edInfo.length);
    if (this.state.edInfo.length > 0) {
      returnForm = this.state.edInfo.map((form) => {
        console.log(form);
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
    console.log('rf ', returnForm);

  return (
    <div className="edInfo">
      <h1>Education:</h1>
      {returnForm}
      <button className="addEducationBtn" onClick={this.addEducation}>Add</button>
    </div>
  )
  }
}

export default EdInfo;