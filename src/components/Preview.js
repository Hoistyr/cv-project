import React from 'react';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    console.log('render preview');
    console.log('preprops ', this.props); 
    let returnForm = '';
    let genInfo = '';
    let expArray = '';
    let edInfo = '';
    
    if (this.props.genInfo) {
      genInfo = this.props.genInfo;
    }
    if (this.props.expArray) {
      expArray = this.props.expArray;

      // ADDME 
      // Create the JSX here for each item in the array then port it out to the main JSX
    }
    if (this.props.edInfo) {
      edInfo = this.props.edInfo;
    }
    
    console.log('preview expinfo', expArray);

    returnForm = 
    <div className="preview">
      <div className="fullNameDiv">
        <h1 className="fullNameText">{genInfo.firstName} {genInfo.lastName}</h1>
      </div>
      <div className="personalInformationDiv">
        
      </div>
      <div className="experienceDiv">
        <h1 className="experienceTitleText cvTitleText">Professional Experience</h1>
        <div className="experienceContent">
          
        </div>
      </div>
      <div className="educationDiv">
        <h1 className="educationTitleText cvTitleText">Education</h1>
        <div className="educationContent">
          
        </div>
      </div>
    </div>
    return (
      <div className="previewHolder">
        {returnForm}
      </div>
    )
  }
}

export default Preview;