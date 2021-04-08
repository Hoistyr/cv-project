import React from 'react';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    const information = document.querySelectorAll('.infoForm');
    // .querySelectorAll('p');
    console.log(information);

    return (
      <div className="preview">
        <div className="fullNameDiv">
          <h1 className="fullNameText">test</h1>
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
    )
  }
}

export default Preview;