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
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import GetApp from '@material-ui/icons/GetApp';






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

  componentDidMount(){
    window.addEventListener('scroll', () => this.handleChange())
  }

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  handleDelete = () => {
  alert('You clicked the delete icon.'); // eslint-disable-line no-alert
}

  render() {
    const { checked } = this.state;

    return (
      <div className="App">
        <CssBaseline>
          <MuiThemeProvider theme={theme}>
            <div className="banner-top">
              <Grid container justify="center">
                <div className="banner">
                  <Typography variant="h4">
                      Pio Molina
                  </Typography>
                  Projects
                  <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />
                </div>
              </Grid>

            <Typography variant="h5" className="buttons-margin">
              <ProjectGrid checked={checked}/>
            </Typography>
            <div className="download-space">
              <a id="download-link" href="/Pio_Molina_Resume_General.pdf" download>
                <Chip
                  label="Download My Resume"
                  clickable
                  color="primary"
                  onDelete={this.handleDelete}

                  deleteIcon={<GetApp />}
                  />
              </a>
            </div>
            </div>
          </MuiThemeProvider>
        </CssBaseline>
      </div>
    );
  }
}

export default App;
