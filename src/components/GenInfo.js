import React from 'react';

class GenInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genInfo: {},
      viewing: false,
      editing: false,
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
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

  render () {
    let genShip = this.props.genShip;
    let genInfo = ''; 
    console.log('genprops ', this.props);
    if (this.props.genShip.genInfo) {
      genInfo = this.props.genShip.genInfo;
    }
    console.log('genInfo', genInfo);
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
            <label htmlFor="address">
              <input type="text" name="address" placeholder="Adress: (42 Wallaby Way, Sydney)"/>
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
          {this.props.handleEdit}
          {this.props.handleDelete}
        </div>
        
        <div className="genForm">
          <h1>Personal Information:</h1>
          <p className="genFirstName">{genInfo.firstName} {genInfo.lastName}</p>
          <p className="genLastName">{genInfo.email}</p>
          <p className="genAddress">{genInfo.address}</p>
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
                <input type="text" name="firstName" defaultValue={genInfo.firstName} placeholder="First Name"/>
              </label>
              <label htmlFor="lastName">
                <input type="text" name="lastName" defaultValue={genInfo.lastName} placeholder="Last Name"/>
              </label>
              <label htmlFor="address">
                <input type="text" name="address" defaultValue={genInfo.address} placeholder="Adress: (42 Wallaby Way, Sydney)"/>
            </label>
              <label htmlFor="email">
                <input type="email" name="email" defaultValue={genInfo.email} placeholder="Email: (Example@example.com)"/>
              </label>
              <label htmlFor="phone">
                <input type="tel" name="phone" defaultValue={genInfo.phone} placeholder="Phone"/>
              </label>
              <label htmlFor="linkedIn">
                <input type="link" name="linkedIn" defaultValue={genInfo.linkedIn} placeholder="LinkedIn: (https://www.linkedin.com/FooBar)"/>
              </label>
              <label htmlFor="aboutMe">
              <textarea name="aboutMe" defaultValue={genInfo.aboutMe} placeholder="Additional information"></textarea>
              </label>
              {this.props.saveButton}
          </form>
        </div>

      returnForm = defaultForm;
      if (genShip.viewing === true) {
        returnForm = viewForm;
      }
      if (genShip.editing === true) {
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