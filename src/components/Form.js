import React from 'react';
import GenInfo from '../components/GenInfo';
import EdInfo from '../components/EdInfo';
import ExpInfo from '../components/ExpInfo';
import Preview from '../components/Preview';
import uniqid from 'uniqid';
import editIcon from '../images/icons/editIcon.svg';
import deleteIcon from '../images/icons/deleteIcon.svg';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genShip: {
        editing: false,
        viewing: false,
        genInfo: {},
      },
      expShip: {
        expArray: [],
      },
      edShip: {
        edArray: [],
      },
    }

    this.saveGenForm = this.saveGenForm.bind(this);
    this.handleGenEdit = this.handleGenEdit.bind(this);
    this.handleGenDelete = this.handleGenDelete.bind(this);
    
    this.saveExpForm = this.saveExpForm.bind(this);
    this.handleExpEdit = this.handleExpEdit.bind(this);
    this.saveExpEdit = this.saveExpEdit.bind(this);
    this.handleExpDelete = this.handleExpDelete.bind(this);
    this.addExperience = this.addExperience.bind(this);
    
    this.saveEdForm = this.saveEdForm.bind(this);
    this.handleEdEdit = this.handleEdEdit.bind(this);
    this.saveEdEdit = this.saveEdEdit.bind(this);
    this.handleEdDelete = this.handleEdDelete.bind(this);
    this.addEducation = this.addEducation.bind(this);
  }

  saveGenForm(event) {
    console.log('saveForm');
    event.preventDefault();
    const genInputs = event.target.parentNode.querySelectorAll('input, textarea');
    console.log(genInputs);
    let genObject = {};
    genInputs.forEach((input) => {
      genObject[input.name] = input.value;
    });
    this.setState({genShip: {viewing: true, editing: false, genInfo: genObject}});
  }

  handleGenEdit(event) {
    event.preventDefault();
    console.log('genEdit');
    this.setState({genShip: {viewing: false, editing: true, genInfo: this.state.genShip.genInfo}});
  }

  handleGenDelete(event) {
    event.preventDefault();
    this.setState({genShip: {viewing: false, editing: false, genInfo: {}}});
  }

  //Experience Functions
  saveExpForm(event) {
    console.log('saveExpForm');
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
    
    this.setState({expShip: {expArray: [...this.state.expShip.expArray, expObject]}});
    
    const removeIndex = this.state.expShip.expArray.findIndex((form) => form.removeMe === true);
    if (removeIndex > -1) {
      const removeTempObject = this.state.expShip.expArray.splice(removeIndex, 1);
      this.setState({expShip: {expArray: removeTempObject}});
      this.setState({expShip:{expArray: [...this.state.expShip.expArray, expObject]}});
    }
  }

  handleExpEdit(event) {
    console.log('edit');
    const formHolderID = event.target.parentNode.parentNode.parentNode.attributes.formid.value;
    const changeToEdit = this.state.expShip.expArray.map((form) => {
      if (form.id === formHolderID) {
        console.log('match');
        form.viewing = false;
        form.editing = true;
        return form;
      }
      return form;
    });
    console.log(changeToEdit);
    this.setState({expShip: {expArray: changeToEdit}});
  }

  saveExpEdit(event) {
    event.preventDefault();
    const formHolderID = event.target.parentNode.parentNode.attributes.formid.value;

    const expInputs = event.target.parentNode.querySelectorAll('input, textarea');
    const editedArray = this.state.expShip.expArray.map((form) => {
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
    
    this.setState({expShip: {expArray: editedArray}});
  }

  handleExpDelete(event) {
    console.log('delete');
    const formHolderID = event.target.parentNode.parentNode.parentNode.attributes.formid.value;
    const delArray =  this.state.expShip.expArray.filter((form) => {
      if (form.id === formHolderID) {
        return false;
      }
      return true;
    });

    this.setState({expShip: {expArray: delArray}});
  }

  addExperience(event) {
    event.preventDefault();
    console.log('inadded');
    const emptyExp = {
      editing: false,
      viewing: false,
      removeMe: true,
    }
    this.setState({expShip: {expArray: [...this.state.expShip.expArray, emptyExp]}});
  }
  
  // Education Functions
  saveEdForm(event) {
    console.log('saveEdForm');
    event.preventDefault();
    const edInputs = event.target.parentNode.querySelectorAll('input,  textarea');
    console.log(edInputs);
    let edObject = {};
    edInputs.forEach((input) => {
      edObject[input.name] = input.value
    });
    edObject['id'] = uniqid();
    edObject['viewing'] = true;
    edObject['editing'] = false;
    
    this.setState({edShip: {edArray: [...this.state.edShip.edArray, edObject]}});
    
    const removeIndex = this.state.edShip.edArray.findIndex((form) => form.removeMe === true);
    if (removeIndex > -1) {
      const removeTempObject = this.state.edShip.edArray.splice(removeIndex, 1);
      this.setState({edShip: {edArray: removeTempObject}});
      this.setState({edShip:{edArray: [...this.state.edShip.edArray, edObject]}});
    }
  }

  handleEdEdit(event) {
    console.log('edit');
    const formHolderID = event.target.parentNode.parentNode.parentNode.attributes.formid.value;
    const changeToEdit = this.state.edShip.edArray.map((form) => {
      if (form.id === formHolderID) {
        console.log('match');
        form.viewing = false;
        form.editing = true;
        return form;
      }
      return form;
    });
    console.log(changeToEdit);
    this.setState({edShip: {edArray: changeToEdit}});
  }

  saveEdEdit(event) {
    event.preventDefault();
    const formHolderID = event.target.parentNode.parentNode.attributes.formid.value;

    const edInputs = event.target.parentNode.querySelectorAll('input, textarea');
    const editedArray = this.state.edShip.edArray.map((form) => {
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
    
    this.setState({edShip: {edArray: editedArray}});
  }

  handleEdDelete(event) {
    console.log('delete');
    const formHolderID = event.target.parentNode.parentNode.parentNode.attributes.formid.value;
    const delArray =  this.state.edShip.edArray.filter((form) => {
      if (form.id === formHolderID) {
        return false;
      }
      return true;
    });

    this.setState({edShip: {edArray: delArray}});
  }

  addEducation(event) {
    event.preventDefault();
    console.log('inadded');
    const emptyEd = {
      editing: false,
      viewing: false,
      removeMe: true,
    }
    this.setState({edShip: {edArray: [...this.state.edShip.edArray, emptyEd]}});
  }

  render () {
    // General Information Component Buttons
    const saveGenButton = 
    <button className="saveGen" onClick={this.saveGenForm}>Save</button>;
    const handleGenEdit = 
      <div className="editButtonHolder" onClick={this.handleGenEdit}>
        <img className="editIcon actionIcon" src={editIcon} alt="Click this to edit" ></img>
      </div>;
    const handleGenDelete =
      <div className="deleteButtonHolder" onClick={this.handleGenDelete}>
        <img className="deleteIcon actionIcon" src={deleteIcon} alt="Click this to delete"></img>
      </div>;

    //Experience Buttons
    const saveExpButton = 
    <button className="saveExp" onClick={this.saveExpForm}>Save</button>;
    const handleExpEdit = 
    <div className="editButtonHolder" onClick={this.handleExpEdit}>
      <img className="editIcon actionIcon" src={editIcon} alt="Click this to edit" ></img>
    </div>;
    const saveExpEdit = 
    <button className="addExperienceBtn" onClick={this.saveExpEdit}>Save</button>;
    const handleExpDelete = 
    <div className="deleteButtonHolder" onClick={this.handleExpDelete}>
      <img className="deleteIcon actionIcon" src={deleteIcon} alt="Click this to delete"></img>
    </div>
    const addExperienceBtn =
    <button className="addExperienceBtn" onClick={this.addExperience}>Add</button>;

    //Education Buttons
    const saveEdButton = 
    <button className="saveEd" onClick={this.saveEdForm}>Save</button>;
    const handleEdEdit = 
    <div className="editButtonHolder" onClick={this.handleEdEdit}>
      <img className="editIcon actionIcon" src={editIcon} alt="Click this to edit" ></img>
    </div>;
    const saveEdEdit = 
    <button className="addEderienceBtn" onClick={this.saveEdEdit}>Save</button>;
    const handleEdDelete = 
    <div className="deleteButtonHolder" onClick={this.handleEdDelete}>
      <img className="deleteIcon actionIcon" src={deleteIcon} alt="Click this to delete"></img>
    </div>
    const addEducationBtn =
    <button className="addEducationBtn" onClick={this.addEducation}>Add</button>;
    
    return (
      <div className="form">
        <div className="input">
          <GenInfo 
            saveButton={saveGenButton} 
            genShip={this.state.genShip}
            handleEdit={handleGenEdit}
            handleDelete={handleGenDelete}
            />
          <ExpInfo 
            saveButton={saveExpButton} 
            addExperienceButton={addExperienceBtn} 
            expShip={this.state.expShip} 
            handleEdit={handleExpEdit}
            saveEdit={saveExpEdit}
            handleDelete={handleExpDelete}
            />
          <EdInfo 
            saveButton={saveEdButton} 
            addEducationButton={addEducationBtn} 
            edShip={this.state.edShip} 
            handleEdit={handleEdEdit}
            saveEdit={saveEdEdit}
            handleDelete={handleEdDelete}
            />
        </div>
        
        <Preview 
          genInfo={this.state.genShip.genInfo} 
          expArray={this.state.expShip.expArray} 
          edInfo={this.state.edShip.edArray} 
          />
      </div>
    )
  }
}

export default Form;