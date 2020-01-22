import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/';

const anchor = document.createElement('div');
anchor.id = 'rcr-anchor';

if(document.querySelector('[data-selectable-paragraph]')) {
	document.querySelector('[data-selectable-paragraph]').insertAdjacentElement('beforebegin', anchor)
}

ReactDOM.render(
  <Index document={document} />,
  document.getElementById('rcr-anchor')
);
