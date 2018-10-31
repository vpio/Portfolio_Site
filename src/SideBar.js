import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const sideList = (
      <div>
        <List>
          {['Hello', 'This Application', 'Is Still In', 'Production'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
        <ListItem button>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary={'But'} />
        </ListItem>
        <a id="download-link" href="mailto:piomolinacode@gmail.com" download>
        <ListItem button>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary={'Click Here To Email Me'} />
        </ListItem>
        </a>
        <a id="download-link" href="/Pio_Molina_Resume_General.pdf" download>
        <ListItem button >
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary={'Here for My Resume'} />
        </ListItem>
        </a>
        </List>
      </div>
    );

const SideBar = props => {
  return (
    <SwipeableDrawer
      open={props.open}
      onClose={props.onClose}
      onOpen={props.onOpen}
      >
      <div
        tabIndex={0}
        role="button"
        onClick={props.toggleDrawer('left', false)}
        onKeyDown={props.toggleDrawer('left', false)}
        >
        {sideList}
      </div>
    </SwipeableDrawer>
  )
}

export default SideBar;
