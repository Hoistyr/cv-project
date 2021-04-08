import React from 'react';
import editIcon from '../images/icons/editIcon.svg';
import deleteIcon from '../images/icons/deleteIcon.svg';

class GenInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genInfo: {},
      viewing: false,
      editing: false,
    }

    this.saveForm = this.saveForm.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  saveForm(event) {
    console.log('saveForm');
    event.preventDefault();
    const genInputs = event.target.parentNode.querySelectorAll('input, textarea');
    console.log(genInputs);
    let genObject = {};
    genInputs.forEach((input) => {
      genObject[input.name] = input.value
      
    });
    console.log(genObject);
    this.setState({viewing: true, editing: false, genInfo: genObject});
    
  }

  handleMouseEnter(event) {
    let form = event.target;
    if (!form.classList.contains('genFormHolder')) {
      form = form.parentNode;
      if (!form.classList.contains('genFormHolder')) {
        form = form.parentNode;
        if (!form.classList.contains('genFormHolder')) {
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
    
    if (!form.classList.contains('genFormHolder')) {
      form = form.parentNode;
      if (!form.classList.contains('genFormHolder')) {
        form = form.parentNode;
        if (!form.classList.contains('genFormHolder')) {
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
    console.log(this.state.genInfo);
    this.setState({viewing: false, editing: true});
  }

  handleDelete(event) {
    console.log('delete');
    this.setState({genInfo: {}, viewing: false, editing: false});
  }

  render () {
    console.log('props ', this.props);
    let genObject = this.props.genObject;
    let genInfo = '';
    if (this.props.genObject.genInfo) {
      genInfo = this.props.genObject.genInfo;
    }
    console.log('state ', this.state);
    let returnForm = '';
    
    const defaultForm = 
      <div className="genFormHolder">
        <form className="genForm">
          <h1>Personal Information:</h1>
            <label htmlFor="firstName">
              <input type="text" name="firstName" placeholder="First Name"/>
            </label>
            <label htmlFor="lastName">
              <input type="text" name="lastName" placeholder="Last Name"/>
            </label>
            <label htmlFor="email">
              
              <input type="email" name="email" placeholder="Email: (Example@example.com)"/>
            </label>
            <label htmlFor="phone">
              <input type="tel" name="phone" placeholder="Phone Number"/>
            </label>
            <label htmlFor="linkedIn">
              <input type="link" name="linkedIn" placeholder="LinkedIn: (https://www.linkedin.com/FooBar)"/>
            </label>
            <label htmlFor="aboutMe">
              <textarea name="aboutMe" placeholder="Additional information"></textarea>
            </label>
            {this.props.saveButton}
        </form>
      </div>
      

      const viewForm =
      <div className="genFormHolder infoForm" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <div className="iconDiv">
          <div className="editButtonHolder" onClick={this.handleEdit}>
            <img className="editIcon actionIcon" src={editIcon} alt="Click this to edit" ></img>
          </div>
          <div className="deleteButtonHolder" onClick={this.handleDelete}>
            <img className="deleteIcon actionIcon" src={deleteIcon} alt="Click this to delete"></img>
          </div>
        </div>
        
        <div className="genForm">
          <h1>Personal Information:</h1>
          <p className="genFirstName">{genInfo.firstName} {this.state.genInfo.lastName}</p>
          <p className="genLastName">{genInfo.email}</p>
          <p className="genPhone">{genInfo.phone}</p>
          <p className="genLinkedIn">{genInfo.linkedIn}</p>
          <p className="genAboutMe">{genInfo.aboutMe}</p>
        </div>
      </div>

      const editForm = 
        <div className="genFormHolder-ed">
          <form className="genForm">
            <h1>Personal Information:</h1>
              <label htmlFor="firstName">
                <input type="text" name="firstName" defaultValue={this.state.genInfo.firstName} placeholder="First Name"/>
              </label>
              <label htmlFor="lastName">
                <input type="text" name="lastName" defaultValue={this.state.genInfo.lastName} placeholder="Last Name"/>
              </label>
              <label htmlFor="email">
                <input type="email" name="email" defaultValue={this.state.genInfo.email} placeholder="Email: (Example@example.com)"/>
              </label>
              <label htmlFor="phone">
                <input type="tel" name="phone" defaultValue={this.state.genInfo.phone} placeholder="Phone"/>
              </label>
              <label htmlFor="linkedIn">
                <input type="link" name="linkedIn" defaultValue={this.state.genInfo.linkedIn} placeholder="LinkedIn: (https://www.linkedin.com/FooBar)"/>
              </label>
              <label htmlFor="aboutMe">
              <textarea name="aboutMe" defaultValue={this.state.genInfo.aboutMe} placeholder="Additional information"></textarea>
              </label>
              <button className="saveGen" onClick={this.saveForm}>Save</button>
          </form>
        </div>
      

      returnForm = defaultForm;
      if (genObject.viewing === true) {
        returnForm = viewForm;
      }
      if (genObject.editing === true) {
        returnForm = editForm;
      }

    return (
      <div className="genInfo">
        {returnForm}
      </div>
    )
  }
}

export default GenInfo;