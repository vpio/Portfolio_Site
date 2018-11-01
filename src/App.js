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
import MusicSection from './MusicSection';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import SideBar from './SideBar'


configureAnchors({offset: -60, scrollDuration: 200})

// Setting up the theme using Material UI Library
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#1769aa',
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
    isTop: false,
    left: false
  };

  componentDidMount(){
    // window.addEventListener('scroll', _.throttle(this.handleChange, 1500, { trailing: false, leading: true }))
    window.addEventListener('scroll', _.throttle(this.newSection, 1200, { trailing: false, leading: true }))
  }

  newSection = () => {
    const isTop = window.scrollY > 10;
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

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { checked, activeStep, isTop } = this.state;

    return (
      <div className="App">
        <CssBaseline>
          <MuiThemeProvider theme={theme}>
            <AppBar>
              <Toolbar>
                <Button href='#section2' color="default" >
                  Projects
                </Button>
                <Button href='https://github.com/vpio' target="_blank" color="default">
                  GitHub
                </Button>
              </Toolbar>
            </AppBar>
            <div className="banner-top">
              <img src={require('./images/pio-headshot.JPG')} alt="pio molina" className="prof-pic"/>
              {/*<CanvasComponent className="canvas-style"/>*/}
              <Grid container justify="center" className="zindex-test">
                <div className="banner">
                  <Stepper activeStep={activeStep} orientation="vertical" className="main-stepper">
                    <Step>
                      <StepLabel></StepLabel>

                    </Step>
                    <Step>
                      <StepLabel></StepLabel>

                    </Step>
                  </Stepper>

                  <ScrollableAnchor id={'section1'}>
                    <div>
                      <Typography variant="h3" className="site-title">
                        Pio Molina
                      </Typography>
                    {/*  <div className="button-group">
                        <Button href='#section2' color="primary" variant="outlined" size="large" className="home-button">
                          Projects
                        </Button>
                        <Button href='#section3' color="primary" variant="outlined" size="large" className="home-button">
                          Music
                        </Button>
                      </div>*/}
                      {/*Projects
                        <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />*/}
                      </div>
                    </ScrollableAnchor>
                    <div className="main-section">
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
                      <ScrollableAnchor id={'section2'}>
                        <div>
                          <Typography variant="h5" className="buttons-margin">
                            <ProjectGrid checked={isTop}/>
                          </Typography>
                        </div>
                      </ScrollableAnchor>
                    </div>
                  {/*  <div className="music-section">
                      <ScrollableAnchor id={'section3'}>
                        <div>
                          <MusicSection />
                        </div>
                      </ScrollableAnchor>
                    </div>*/}
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
