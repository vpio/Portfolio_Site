import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import SimpleCard from './SimpleCard';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline>
          Pio
          <div>
            <Grid container spacing={16}>
              <Grid item xs={12}>
                <SimpleCard />
              </Grid>
              <Grid item xs={12}>
                <SimpleCard />
              </Grid>
              <Grid item xs={12}>
                <SimpleCard />
              </Grid>
            </Grid>
          </div>
        </CssBaseline>
      </div>
    );
  }
}

export default App;
