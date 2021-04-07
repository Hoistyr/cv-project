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
    const genInputs = event.target.parentNode.querySelectorAll('input' && 'textarea');
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
    console.log('state ', this.state);
    let returnForm = '';
    
    const defaultForm = 
      <div className="genFormHolder">
        <form className="genForm">
          <h1>General Information:</h1>
            <label htmlFor="firstName">
              First Name:
              <input type="text" name="firstName"/>
            </label>
            <label htmlFor="lastName">
              Last Name:
              <input type="text" name="lastName"/>
            </label>
            <label htmlFor="email">
              Email:
              <input type="email" name="email"/>
            </label>
            <label htmlFor="phone">
              Phone Number:
              <input type="tel" name="phone" />
            </label>
            <label htmlFor="linkedIn">
              LinkedIn:
              <input type="link" name="linkedIn" />
            </label>
            <label htmlFor="aboutMe">
              Additional Information:
              <textarea name="aboutMe"></textarea>
            </label>
            <button className="saveGen" onClick={this.saveForm}>Save</button>
        </form>
      </div>
      

      const viewForm =
      <div className="genFormHolder" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <div className="iconDiv">
          <div className="editButtonHolder" onClick={this.handleEdit}>
            <img className="editIcon actionIcon" src={editIcon} alt="Click this to edit" ></img>
          </div>
          <div className="deleteButtonHolder" onClick={this.handleDelete}>
            <img className="deleteIcon actionIcon" src={deleteIcon} alt="Click this to delete"></img>
          </div>
        </div>
        
        <div className="genForm" >
          <h1>General Information:</h1>
          <p className="firstName">{this.state.genInfo.firstName} {this.state.genInfo.lastName}</p>
          <p>{this.state.genInfo.email}</p>
          <p>{this.state.genInfo.phone}</p>
          <p>{this.state.genInfo.linkedIn}</p>
          <p>{this.state.genInfo.aboutMe}</p>
        </div>
      </div>

      const editForm = 
        <div className="genFormHolder-ed">
          <form className="genForm">
            <h1>General Information:</h1>
              <label htmlFor="firstName">
                First Name:
                <input type="text" name="firstName" defaultValue={this.state.genInfo.firstName}/>
              </label>
              <label htmlFor="lastName">
                Last Name:
                <input type="text" name="lastName" defaultValue={this.state.genInfo.lastName}/>
              </label>
              <label htmlFor="email">
                Email:
                <input type="email" name="email" defaultValue={this.state.genInfo.email}/>
              </label>
              <label htmlFor="phone">
                Phone Number:
                <input type="tel" name="phone" defaultValue={this.state.genInfo.phone}/>
              </label>
              <label htmlFor="linkedIn">
                LinkedIn:
                <input type="link" name="linkedIn"  defaultValue={this.state.genInfo.linkedIn}/>
              </label>
              <label htmlFor="aboutMe">
              Additional Information:
              <textarea name="aboutMe" defaultValue={this.state.genInfo.aboutMe}></textarea>
              </label>
              <button className="saveGen" onClick={this.saveForm}>Save</button>
          </form>
        </div>
      

      returnForm = defaultForm;
      if (this.state.viewing === true && this.state.editing !== true) {
        returnForm = viewForm;
      }
      if (this.state.editing === true && this.state.viewing !== true) {
        console.log('editing');
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