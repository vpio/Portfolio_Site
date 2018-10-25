import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grow from '@material-ui/core/Grow';


const ProjectGrid = props => {
  return(
    <div>
      <Grid container justify="center" spacing={16}>
        <Grow in={props.checked}>
          <Grid item>
            <Card className="card">
              <CardContent>Muver</CardContent>
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
              <CardContent>Wynning Smiles</CardContent>
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
              <CardContent>HTML CSS</CardContent>
            </Card>
          </Grid>
        </Grow>
      </Grid>
    </div>
  )
}

export default ProjectGrid;
