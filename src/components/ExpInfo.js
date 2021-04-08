import React from 'react';
import uniqid from 'uniqid';
import editIcon from '../images/icons/editIcon.svg';
import deleteIcon from '../images/icons/deleteIcon.svg';

class ExpInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expInfo: [],
    }

    this.saveForm = this.saveForm.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addExperience = this.addExperience.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.clearText = this.clearText.bind(this);
  }

  saveForm(event) {
    console.log('saveForm');
    event.preventDefault();
    const expInputs = event.target.parentNode.querySelectorAll('input,  textarea');
    console.log(expInputs);
    let expObject = {};
    expInputs.forEach((input) => {
      expObject[input.name] = input.value
    });
    expObject['id'] = uniqid();
    expObject['viewing'] = true;
    expObject['editing'] = false;
    
    this.setState({expInfo: [...this.state.expInfo, expObject]});
    
    const removeIndex = this.state.expInfo.findIndex((form) => form.removeMe === true);
    if (removeIndex > -1) {
      const removeTempObject = this.state.expInfo.splice(removeIndex, 1);
      console.log('rto ', removeTempObject);
      this.setState({expInfo: removeTempObject});
      this.setState({expInfo: [...this.state.expInfo, expObject]});
    }
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

  handleEdit(event) {
    console.log('edit');
    const formHolderID = event.target.parentNode.parentNode.parentNode.attributes.formid.value;
    const changeToEdit = this.state.expInfo.map((form) => {
      if (form.id === formHolderID) {
        console.log('match');
        form.viewing = false;
        form.editing = true;
        return form;
      }
      return form;
    });
    console.log(changeToEdit);
    this.setState({expInfo: changeToEdit});
  }

  saveEdit(event) {
    event.preventDefault();
    const formHolderID = event.target.parentNode.parentNode.attributes.formid.value;

    const expInputs = event.target.parentNode.querySelectorAll('input, textarea');
    const editedArray = this.state.expInfo.map((form) => {
      if (form.id === formHolderID) {
        expInputs.forEach((input) => {
          form[input.name] = input.value
        });
        form['viewing'] = true;
        form['editing'] = false;
        return form;
      }
      return form;
    })
    
    this.setState({expInfo: editedArray});
  }

  handleDelete(event) {
    console.log('delete');
    const formHolderID = event.target.parentNode.parentNode.parentNode.attributes.formid.value;
    const delArray =  this.state.expInfo.filter((form) => {
      if (form.id === formHolderID) {
        return false;
      }
      return true;
    });

    this.setState({expInfo: delArray});
  }

  addExperience(event) {
    event.preventDefault();
    console.log('inadded');
    const emptyExp = {
      editing: false,
      viewing: false,
      removeMe: true,
    }
    this.setState({expInfo: [...this.state.expInfo, emptyExp]});
  }
  render () {
    console.log('expInfo ', this.state.expInfo); 
    
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
        <button className="addExperienceBtn" onClick={this.saveForm}>Save</button>
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
        <button className="addExperienceBtn" onClick={this.saveEdit}>Save</button>
      </form>
    </div>
    return finishedForm;
  }
    
    const viewForm = (form) => {
      console.log('in viewform');
      const finishedForm =
      <div className="expFormHolder infoForm" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} key={form.id} formid={form.id}>
        <div className="iconDiv">
          <div className="editButtonHolder" onClick={this.handleEdit}>
            <img className="editIcon actionIcon" src={editIcon} alt="Click this to edit" ></img>
          </div>
          <div className="deleteButtonHolder" onClick={this.handleDelete}>
            <img className="deleteIcon actionIcon" src={deleteIcon} alt="Click this to delete"></img>
          </div>
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
    console.log(this.state.expInfo.length);
    if (this.state.expInfo.length > 0) {
      returnForm = this.state.expInfo.map((form) => {
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
        <h1>Experience:</h1>
        {returnForm}
        <button className="addExperienceBtn" onClick={this.addExperience}>Add</button>
    </div>
    )
  }
}

export default ExpInfo;