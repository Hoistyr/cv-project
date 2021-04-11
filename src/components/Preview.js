import React from 'react';
import printerIcon from '../images/icons/printerIcon.svg';

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
        // <div className="experienceSection" key={expObject.id}>
        //   <div className="expDateDiv">
        //     <p className="expDateText">{startDate} - {endDate}</p>
        //   </div>
        //   <div className="expDetailsDiv">
        //     <p className="positionText">{position}</p>
        //     <p className="companyNameLocText"><i>{company}, {city}, {state}</i></p>
        //     <p className="jobDetailsText">{jobTasks}</p>
        //   </div>
        // </div>

        <div class="experienceSection" key={expObject.id}>
          <div class="expDateDiv">
            <p class="expDateText">Jan 2003 - Feb 2006</p>
            </div>
            <div class="expDetailsDiv">
              <p class="positionText">asd</p>
              <p class="companyNameLocText"><i>bbbb, Burgabooaa, PA</i></p>
              <p class="jobDetailsText">
                Nunc pretium neque eros, quis viverra dolor accumsan eget. Phasellus posuere erat sed libero convallis consequat ac fringilla massa. Pellentesque iaculis eros odio, vitae hendrerit ligula auctor at. Suspendisse euismod interdum neque, eget hendrerit odio tincidunt sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ac ipsum vitae diam suscipit feugiat ut eu ligula. Aliquam et rutrum massa. Quisque tempor lobortis magna nec bibendum. Nunc pharetra elementum pulvinar. In ac condimentum massa, in gravida magna. Aliquam ultricies risus dignissim, viverra elit sed, euismod mi. Fusce ac venenatis justo. Ut at ex congue tortor ullamcorper vulputate. 
              </p>
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
        // <div className="educationSection" key={edObject.id}>
        //   <div className="edDateDiv">
        //     <p className="edDateText">{startDate} - {endDate}</p>
        //   </div>
        //   <div className="edDetailsDiv">
        //     <p className="positionText">{position}</p>
        //     <p className="companyNameLocText"><i>{company}, {city}, {state}</i></p>
        //     <p className="jobDetailsText">{jobTasks}</p>
        //   </div>
        // </div>

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
    
    console.log('preview expinfo', expArray);

    // <div className="personalInformationDiv">
    //   <div className="fullNameDiv">
    //     <h1 className="fullNameText">{genInfo.firstName} {genInfo.lastName}</h1>
    //   </div>
      
    //   <div className="contactInfoDiv">
    //     <div className="addressDiv">
    //       <p className="addressTitle">Address</p>
    //       <p className="addressText">{genInfo.address}</p>
    //     </div>
    //     <div className="phoneDiv">
    //       <p className="phoneTitle">Phone</p>
    //       <p className="phoneText">{genInfo.phone}</p>
    //     </div>
    //     <div className="emailDiv">
    //       <p className="emailTitle">Email</p>
    //       <p className="emailText">{genInfo.email}</p>
    //     </div>
    //     <div className="linkedInDiv">
    //       <p className="linkedInTitle">linkedIn</p>
    //       <p className="linkedInText">{genInfo.linkedIn}</p>
    //     </div>
    //   </div>

    //   <div className="personalDetailsDiv">
    //       <p className="personalDetailsText">{genInfo.aboutMe}</p>
    //   </div>
    // </div>
    
    
    
    returnForm =
    <div className="preview">
      <div className="personalInformationDiv">
        <div className="fullNameDiv">
          <h1 className="fullNameText">Bob Cratchett</h1>
        </div>
        
        <div className="contactInfoDiv">
          <div className="addressDiv">
            <p className="addressTitle genTitle">Address</p>
            <p className="addressText">42 Wallaby Way, Sydney</p>
          </div>
          <div className="phoneDiv contactInfoItem">
            <p className="phoneTitle genTitle">Phone</p>
            <p className="phoneText genText">(555) 555-5555</p>
          </div>
          <div className="emailDiv contactInfoItem">
            <p className="emailTitle genTitle">Email</p>
            <p className="emailText genText">email@example.com</p>
          </div>
          <div className="linkedInDiv contactInfoItem">
            <p className="linkedInTitle genTitle">LinkedIn</p>
            <p className="linkedInText genText">https://www.linkedin.com/booga</p>
          </div>
        </div>

        <div className="personalDetailsDiv">
            <p className="personalDetailsText">
              Nunc pretium neque eros, quis viverra dolor accumsan eget. Phasellus posuere erat sed libero convallis consequat ac fringilla massa. Pellentesque iaculis eros odio, vitae hendrerit ligula auctor at. Suspendisse euismod interdum neque, eget hendrerit odio tincidunt sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer ac ipsum vitae diam suscipit feugiat ut eu ligula. Aliquam et rutrum massa. Quisque tempor lobortis magna nec bibendum. Nunc pharetra elementum pulvinar. In ac condimentum massa, in gravida magna. Aliquam ultricies risus dignissim, viverra elit sed, euismod mi. Fusce ac venenatis justo. Ut at ex congue tortor ullamcorper vulputate.
            </p>
        </div>
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
      <img className="printerIcon" src={printerIcon}></img>
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