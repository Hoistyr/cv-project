import React from 'react';
import GenInfo from '../components/GenInfo'
import EdInfo from '../components/EdInfo'
import ExpInfo from '../components/ExpInfo'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render () {
    return (
      <div className="form">
        <GenInfo />
        <EdInfo />
        <ExpInfo />
      </div>
    )
  }
}

export default Form;