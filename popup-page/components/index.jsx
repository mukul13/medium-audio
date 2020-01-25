import React from 'react';
import {connect} from 'react-redux';
import { Container, Fab, Grid, Divider, Typography, Card, Link } from '@material-ui/core';
import {PlayArrow, Stop, Pause} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

class Index extends React.Component {
  constructor (props) {
    super(props)
  }

  pause = () => {
    speechSynthesis.pause()
  }

  unpause = () => {
    console.log('resuming')
    window.speechSynthesis.resume()
  }

  stop = () => {
    speechSynthesis.cancel()
    this.props.dispatch({
        type: 'ADD_STORY',
        payload: ''
    });
    this.props.dispatch({
      type: 'IS_PLAYING',
      payload: false
    });
  }

  render() {
      //     <Typography gutterBottom variant="h5" component="h5" style={{flex: 'auto'}}>
      // {
        // this.props.isPlaying ? 
        // <Link href={document.URL}>Medium Blog Link</Link> 
        // : 'Nothing is playing right now.'
      // }
    // </Typography>
    // <Grid item xs={4} >
        // <Fab color='primary' aria-label='pause'
          // onClick={this.pause}
          // style={{marginRight: '10px'}}
        // >
          // <Pause />
        // </Fab>
      // </Grid>
      // <Grid item xs={6}>
      //  <Fab color='primary' aria-label='play' onClick={this.unpause}>
      //    <PlayArrow />
      //  </Fab>
      //</Grid>
     if (!('speechSynthesis' in window)) {
      return (
        <div>
          <Grid container spacing={3} style={{textAlign: 'center', padding: '25px', justifyContent: 'center'}}>
            <Typography gutterBottom variant="h5" component="h5" style={{flex: 'auto', textAlign: 'center', color: '#4153af'}}>
              This extension currently does not support this browser version.
            </Typography>
          </Grid>
        </div>
      );
    }

    return <Container>
      <Typography gutterBottom variant="h5" component="h5" style={{flex: 'auto', textAlign: 'center', justifyContent: 'center', color: '#4153af'}}>
        Medium Audio
    </Typography>
    <Divider />
    <Grid container spacing={3} style={{textAlign: 'center', padding: '25px', justifyContent: 'center'}}>
        <Fab color='primary' aria-label='stop'>
          <Stop onClick={this.stop} />
        </Fab>
      <Divider />
    </Grid>
    </Container>
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    width: 'maxContent'
  }
}));

const mapStateToProps = (state) => {
  return {
    story: state.story,
    isPlaying: state.play
  };
};

export default connect(mapStateToProps)(Index);
