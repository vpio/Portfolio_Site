import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import SimpleCard from './SimpleCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        Pio
        <div>
          <SimpleCard />
          <SimpleCard />
        </div>
      </div>
    );
  }
}

export default App;
