import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // document.addEventListener('click', () => {
    //   this.props.dispatch({
    //     type: 'ADD_COUNT',
    //     payload: this.state.blogText
    //   });
    // });
  }

  render() {
    // const content = this.props.document.querySelectorAll('.content , .cwdb-json') || []
    const content = document.querySelectorAll('[data-selectable-paragraph]') || []
    let blogText = ''
    content.forEach((c, index) => {
      blogText = `${blogText} ${c.innerText}`
    })
    console.log(blogText)
    this.props.dispatch({
        type: 'ADD_COUNT',
        payload: blogText
    })
    return (
      <div>
        Count: {this.props.count}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);
