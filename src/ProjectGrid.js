import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grow from '@material-ui/core/Grow';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



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
            { /*  <CardMedia
              component="img"
              alt="Contemplative Reptile"
              image={require("./images/muverlogo.png")}
              title="Contemplative Reptile"
              className="card-image card-fix"
              /> */ }
              <CardActions>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
                <Button href="https://muvers.herokuapp.com/" target="_blank" variant="contained" color="default">Learn More</Button>
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
            { /*  <CardMedia
              component="img"
              alt="Contemplative Reptile"
              size="small"
              image={require("./images/wynjoke-logo2.png")}
              title="Contemplative Reptile"
              className="wynjoke-logo card-fix"
              /> */ }
              <CardActions>
                <Button href="https://wynningsmiles.herokuapp.com/" target="_blank" variant="contained" color="default">Learn More</Button>
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
                <Button href="https://github.com/vpio/HTML-CSS-Recreation" target="_blank" variant="contained" color="default">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grow>
      </Grid>
    </div>
  )
}

export default ProjectGrid;
