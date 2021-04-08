import React from 'react';
import GenInfo from '../components/GenInfo';
import EdInfo from '../components/EdInfo';
import ExpInfo from '../components/ExpInfo';
import Preview from '../components/Preview';
import uniqid from 'uniqid';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editButton: '',
      saveButton: '',
      genObject: {},
      expObject: {},
      edObject: {},
    }

    this.saveGenForm = this.saveGenForm.bind(this);
    this.saveExpForm = this.saveExpForm.bind(this);
    this.saveEdForm = this.saveEdForm.bind(this);
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

    console.log(genObject);
    this.setState({genObject: {viewing: true, editing: false, genInfo: genObject}});
    
  }

  saveExpForm(event) {
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
  
  saveEdForm(event) {
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

  render () {

    const saveGenButton = 
    <button className="saveGen" onClick={this.saveGenForm}>Save</button>;
    const saveExpButton = 
    <button className="saveExp" onClick={this.saveExpForm}>Save</button>;
    const saveEdButton =
    <button className="saveEd" onClick={this.saveEdForm}>Save</button>;
    
    return (
      <div className="form">
        <div className="input">
          <GenInfo saveButton={saveGenButton} genObject={this.state.genObject}/>
          <ExpInfo saveButton={saveExpButton}/>
          <EdInfo saveButton={saveEdButton}/>
        </div>
        
        <Preview />
      </div>
    )
  }
}

export default Form;