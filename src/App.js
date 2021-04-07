import Header from './components/Header';
import Form from './components/Form';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  render () {
    return (
      <div className="app">
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
