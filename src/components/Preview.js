import React from 'react';
import printerIcon from '../images/icons/printerIcon.svg';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    
    this.printPreview = this.printPreview.bind(this);
    
  }
  
  printPreview() {
    window.print();
  }

  render () {
    console.log('render preview');
    console.log('preprops ', this.props); 
    let returnForm = '';
    let genInfo = '';
    let expArray = '';
    let edArray = '';
    let experienceSection = '';
    let educationSection = '';
    
    if (this.props.genInfo) {
      genInfo = this.props.genInfo;
    }

    // Checks if the expArray exists and then creates the JSX for each job experience submitted
    if (this.props.expArray) {
      expArray = this.props.expArray;
      experienceSection = expArray.map((expObject) => {
        let startDate = '';
        let endDate = '';
        let position = '';
        let company = '';
        let city = '';
        let state = '';
        let jobTasks = '';
        
        if (expObject.startDate) {
          startDate = expObject.startDate;
        }
        if (expObject.endDate) {
          endDate = expObject.endDate;
        }
        if (expObject.position) {
          position = expObject.position;
        }
        if (expObject.company) {
          company = expObject.company;
        }
        if (expObject.city) {
          city = expObject.city;
        }
        if (expObject.state) {
          state = expObject.state;
        }
        if (expObject.jobTasks) {
          jobTasks = expObject.jobTasks;
        }

        
        const returnSection = 
        <div class="experienceSection" key={expObject.id}>
          <div class="expDateDiv">
            <p className="expDateText">{startDate} - {endDate}</p>
          </div>
          <div class="expDetailsDiv">
            <p className="positionText">{position}</p>
            <p className="companyNameLocText"><i>{company}, {city}, {state}</i></p>
            <p className="jobDetailsText">{jobTasks}</p>
          </div>
        </div>
        return returnSection;
      })
    }

    if (this.props.edArray) {
      edArray = this.props.edArray;
      educationSection = edArray.map((edObject) => {
        let startDate = '';
        let endDate = '';
        let schoolName = '';
        let city = '';
        let state = '';
        let degreeType = '';
        let subject = '';
        
        if (edObject.startDate) {
          startDate = edObject.startDate;
        }
        if (edObject.endDate) {
          endDate = edObject.endDate;
        }
        if (edObject.schoolName) {
          schoolName = edObject.schoolName;
        }
        if (edObject.city) {
          city = edObject.city;
        }
        if (edObject.state) {
          state = edObject.state;
        }
        if (edObject.degreeType) {
          degreeType = edObject.degreeType;
        }
        if (edObject.subject) {
          subject = edObject.subject;
        }

        
        const returnSection =
        <div class="educationSection" key={edObject.id}>
          <div class="edDateDiv">
            <p className="edDateText">{startDate} - {endDate}</p>
          </div>
          <div class="edDetailsDiv">
            <p class="fullDegreeText">{schoolName}, {city}, {state}, {degreeType} in {subject}</p>
          </div>
        </div>
        return returnSection;
      })
    }
    
    let fullName = '';
    let address = '';
    let phone = '';
    let email = '';
    let linkedIn = '';
    let personalDetails = '';

    if (genInfo.firstName || genInfo.lastName) {
      fullName = 
      <h1 className="fullNameText">{genInfo.firstName} {genInfo.lastName}</h1>
    }

    if (genInfo.address) {
      address =
      <div className="addressDiv">
        <p className="addressTitle genTitle">Address</p>
        <p className="addressText">{genInfo.address}</p>
      </div>
    }

    if (genInfo.phone) {
      phone =
      <div className="phoneDiv contactInfoItem">
        <p className="phoneTitle genTitle">Phone</p>
        <p className="phoneText genText">{genInfo.phone}</p>
      </div>
    }

    if (genInfo.email) {
      email =
      <div className="emailDiv contactInfoItem">
        <p className="emailTitle genTitle">Email</p>
        <p className="emailText genText">{genInfo.email}</p>
      </div>
    }

    if (genInfo.linkedIn) {
      linkedIn =
      <div className="linkedInDiv contactInfoItem">
        <p className="linkedInTitle genTitle">LinkedIn</p>
        <p className="linkedInText genText">{genInfo.linkedIn}</p>
      </div>
    }

    if (genInfo.aboutMe) {
      personalDetails =
      <div className="personalDetailsDiv">
        <p className="personalDetailsText">{genInfo.aboutMe}</p>
      </div>
    }

    returnForm =
    <div className="preview">
      <div className="personalInformationDiv">
        <div className="fullNameDiv">
          {fullName}
        </div>
        
        <div className="contactInfoDiv">
          {address}
          {phone}
          {email}
          {linkedIn}
        </div>
        {personalDetails}
      </div>
      
      <div className="experienceDiv">
        <h1 className="experienceTitleText cvTitleText">Professional Experience</h1>
        <div className="experienceContent">
          {experienceSection}
        </div>
      </div>
      <div className="educationDiv">
        <h1 className="educationTitleText cvTitleText">Education</h1>
        <div className="educationContent">
          {educationSection}
        </div>
      </div>
    </div>;

    const printDiv = 
    <div className="printButtonDiv">
      <img className="printerIcon" alt="Icon of a printer for printing the CV" src={printerIcon} onClick={this.printPreview}></img>
    </div>;

    return (
      <div className="previewHolder">
        {printDiv}
        {returnForm}
      </div>
    )
  }
}

export default Preview;