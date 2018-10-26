import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './css/App.css';
import ProjectGrid from './ProjectGrid';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import GetApp from '@material-ui/icons/GetApp';
import _ from 'lodash';
import CanvasComponent from './CanvasComponent';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';

configureAnchors({offset: -60, scrollDuration: 200})

// Setting up the theme using Material UI Library
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
    activeStep: 0,
    isTop: false
  };

  componentDidMount(){
    // window.addEventListener('scroll', _.throttle(this.handleChange, 1500, { trailing: false, leading: true }))
    window.addEventListener('scroll', _.throttle(this.newSection, 1200, { trailing: false, leading: true }))
  }

  newSection = () => {
    const isTop = window.scrollY < 200;
    const {activeStep} = this.state;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop, activeStep: 1 })
      }
      else { this.setState({activeStep: 0 }) }
  }

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  handleDelete = () => {
    alert('You clicked the delete icon.'); // eslint-disable-line no-alert
  }

  render() {
    const { checked, activeStep, isTop } = this.state;

    return (
      <div className="App">
        <CssBaseline>
          <MuiThemeProvider theme={theme}>
            <div className="banner-top">
              <CanvasComponent className="canvas-style"/>
              <Grid container justify="center" className="zindex-test">
                <div className="banner">
                  <Stepper activeStep={activeStep} orientation="vertical" className="main-stepper">
                    <Step>
                      <StepLabel><a href='#section1'></a></StepLabel>

                    </Step>
                    <Step>
                      <StepLabel><a href='#section2'></a></StepLabel>

                    </Step>
                  </Stepper>

                  <ScrollableAnchor id={'section1'}>
                    <div>
                      <Typography variant="h3" className="site-title">
                        Pio Molina
                      </Typography>
                      <div className="button-group">
                        <Button href='#section2' color="primary" variant="outlined" size="large" className="home-button">
                          Projects
                        </Button>
                        <Button href='#section2' color="primary" variant="outlined" size="large" className="home-button">
                          Music
                        </Button>
                      </div>
                      {/*Projects
                        <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />*/}
                      </div>
                    </ScrollableAnchor>
                    <div className="main-section">
                      <ScrollableAnchor id={'section2'}>
                        <div>
                          <Typography variant="h5" className="buttons-margin">
                            <ProjectGrid checked={isTop}/>
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
                      </ScrollableAnchor>
                    </div>
                  </div>
                </Grid>
            </div>
          </MuiThemeProvider>
        </CssBaseline>
      </div>
    );
  }
}

export default App;
