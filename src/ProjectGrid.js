import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grow from '@material-ui/core/Grow';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';



const ProjectGrid = props => {
  return(
    <div>
      <Grid container justify="center" spacing={16}>
        <Grow in={props.checked}>
          <Grid item>
            <Card className="card">
              <CardContent>
                Muver
              </CardContent>
              <CardActions>
                <Button href="https://muvers.herokuapp.com/" target="_blank" size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grow>
        <Grow
          in={props.checked}
          style={{ transformOrigin: '0 0 0' }}
            {...(props.checked ? { timeout: 1000 } : {})}
          >
          <Grid item>
            <Card className="card">
              <CardContent>
                Wynning Smiles
              </CardContent>
              <CardActions>
                <Button href="https://wynningsmiles.herokuapp.com/" target="_blank" size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grow>
        <Grow
          in={props.checked}
          style={{ transformOrigin: '0 0 0' }}
            {...(props.checked ? { timeout: 1500 } : {})}
          >
          <Grid item>
            <Card className="card">
              <CardContent>
                HTML CSS
              </CardContent>
              <CardActions>
                <Button href="https://github.com/vpio/HTML-CSS-Recreation" target="_blank" size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grow>
      </Grid>
    </div>
  )
}

export default ProjectGrid;
