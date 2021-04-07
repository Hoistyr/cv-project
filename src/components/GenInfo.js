import React from 'react';
import editIcon from '../images/icons/editIcon.svg';
import deleteIcon from '../images/icons/deleteIcon.svg';

class GenInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genInfo: [],
      editable: false,
    }

    this.saveForm = this.saveForm.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  saveForm(event) {
    console.log('saveForm');
    event.preventDefault();
    const genInputs = event.target.parentNode.querySelectorAll('input');
    console.log(genInputs);
    let genValues = [];
    let genObject = {};
    genInputs.forEach((input) => {
      genObject[input.name] = input.value
      
    });
    console.log(genObject);
    genValues = [...genValues, genObject];
    console.log(genValues.firstName);
    this.setState({genInfo: genValues});
    this.setState({editable: true});
    console.log(this.state);
  }

  handleMouseEnter(event) {
    
    let form = event.target;
    if (!form.classList.contains('genFormHolder')) {
      console.log('1deep');
      form = form.parentNode;
      if (!form.classList.contains('genFormHolder')) {
        console.log('2deep');
        form = form.parentNode;
      }
    }
    
    form.classList.add('hoverEdit');
  }

  handleMouseLeave(event) {
    let form = event.target;
    if (!form.classList.contains('genForm')) {
      console.log('1deep');
      form = form.parentNode;
      if (!form.classList.contains('genForm')) {
        console.log('2deep');
        form = form.parentNode;
      }
    }
    
    form.classList.remove('hoverEdit');
  }

  render () {
    let genForm = '';
    
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
            <button className="saveGen" onClick={this.saveForm}>Save</button>
        </form>
      </div>
      

      const editForm =
      <div className="genFormHolder">
        <div className="iconDiv">
          <div className="editButtonHolder">
            <img className="editIcon actionIcon" src={editIcon} alt="Click this to edit"></img>
          </div>
          <div className="deleteButtonHolder">
            <img className="deleteIcon actionIcon" src={deleteIcon} alt="Click this to delete"></img>
          </div>
        </div>
        
        <form className="genForm" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
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
        </form>
      </div>
      

      genForm = defaultForm;
      if (this.state.editable === true) {
        genForm = editForm;
      }

    return (
      <div className="genInfo">
        {genForm}
      </div>
    )
  }
}

export default GenInfo;