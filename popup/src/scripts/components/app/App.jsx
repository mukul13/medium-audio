import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // document.addEventListener('click', () => {
    // this.props.dispatch({
    //   type: 'ADD_COUNT'
    // });
    // });
  }

  render() {
    if ('speechSynthesis' in window) {
    // You're good to go!
    // speechSynthesis.speak(new SpeechSynthesisUtterance(this.props.count));
    return (
      <div>
      </div>
    );
    } else {
        <div>
          This is not supported on this version. Please upgrade Chrome Browser Verison.
        </div>
        // Ah man, speech synthesis isn't supported.
    }
  }
}

const mapStateToProps = (state) => {
  
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
