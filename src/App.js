import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import SimpleCard from './SimpleCard';
import CssBaseline from '@material-ui/core/CssBaseline';
import './css/App.css';
import ProjectGrid from './ProjectGrid';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {blue, pink} from '@material-ui/core/colors/blue';
import Switch from '@material-ui/core/Switch';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';




const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { checked } = this.state;

    return (
      <div className="App">
        <CssBaseline>
          <MuiThemeProvider theme={theme}>
            <div className="banner-top">
              <Grid container justify="center">
                <div className="banner">
                  <Typography variant="h2">
                    <Card justify="center" className="card-header">
                      Pio M.
                    </Card>
                  </Typography>
                  <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />
                </div>
              </Grid>
            </div>
            <Typography variant="h5" className="buttons-margin">
              <ProjectGrid checked={checked}/>
            </Typography>
          </MuiThemeProvider>
        </CssBaseline>
      </div>
    );
  }
}

export default App;
