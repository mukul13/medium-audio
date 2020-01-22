import React from 'react';
import {connect} from 'react-redux';
import {  Fab, Grid, Divider, Typography, Card } from '@material-ui/core';
import {PlayArrow, Stop} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Grid container spacing={3} style={{textAlign: 'center'}}>
        <Typography gutterBottom variant="h5" component="h2">
          Nothing is playing right now.
        </Typography>
        <Divider />
        <Grid item xs={6}>
          <Fab color='primary' aria-label='play'>
            <PlayArrow />
          </Fab>
        </Grid>
        <Grid item xs={6}>
          <Fab color='primary' aria-label='stop'>
            <Stop />
          </Fab>
        </Grid>
        <Divider />
      </Grid>
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    width: 'maxContent'
  }
}));

const mapStateToProps = (state) => {
  return {
    story: state.story
  };
};

export default connect(mapStateToProps)(Index);
