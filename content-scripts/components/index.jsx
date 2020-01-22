import React from 'react';
import Button from '@material-ui/core/Button';
import { Grid, Fab } from '@material-ui/core';
import {PlayArrow} from '@material-ui/icons';
import {connect} from 'react-redux';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	let blogText = ''
  	if(document) {
  		const content = document.querySelectorAll('[data-selectable-paragraph]')
  		content.forEach((c, index) => {
  		  blogText = `${blogText} ${c.innerText}`
  		})
  	}
    return <div>
      <Fab color='primary' aria-label='add'
        onClick={() => {
          this.props.dispatch({
              type: 'ADD_STORY',
              payload: blogText
            });
          }}
      >
        <PlayArrow />
      </Fab>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    story: state.story
  };
};

export default connect(mapStateToProps)(Index);
