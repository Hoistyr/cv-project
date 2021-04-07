import React from 'react';

class EdInfo extends React.Component {
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
    const genInputs = event.target.parentNode.querySelectorAll('input');
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
    const defaultForm = 
    <div className="edInfoHolder">
      <div className="edInfo">
        <form className="edForm">
            <h1>Education:</h1>
            
            <label htmlFor="schoolName">
              University Name:
              <input type="text" name="schoolName"/>
            </label>
            
            <label htmlFor="city">
              City:
              <input type="text" name="city"/>
            </label>

            <label htmlFor="state">
              State:
              <input type="text" name="state"/>
            </label>
            
            <label htmlFor="degreeType">
              Degree Type:
              <input type="text" name="degreeType" defaultValue="Ex: MA, BS, PhD"/>
            </label>
            
            <label htmlFor="subject">
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
            
            <button className="addEducationBtn" onClick={this.saveForm}>Add</button>
          </form>
        </div>
      </div>

    const viewForm = 
    <div className="edInfoHolder">
      <div className="edInfo">
        <form className="edForm">
            <h1>Education:</h1>
            <p>{this.state.genInfo.schoolName}</p>
            <p>{this.state.genInfo.city}</p>
            <p>{this.state.genInfo.state}</p>
            <p>{this.state.genInfo.degreeType}</p>
            <p>{this.state.genInfo.subject}</p>
            <p>{this.state.genInfo.from}</p>
            <p>{this.state.genInfo.to}</p>
        
            
            <button className="addEducationBtn" onClick={this.saveForm}>Add</button>
          </form>
        </div>
      </div>
    
    let returnForm = '';
    returnForm = defaultForm;
    if (this.state.viewing === true && this.state.editing !== true) {
      returnForm = viewForm;
    }
    if (this.state.editing === true && this.state.viewing !== true) {
      console.log('editing');
      // returnForm = editForm;
    }

  return (
    <div className="edInfo">
      {returnForm}
    </div>
  )
  }
}

export default EdInfo;