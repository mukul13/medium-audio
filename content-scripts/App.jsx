import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/';
import {Provider} from 'react-redux';
import {Store} from 'webext-redux';
const store = new Store();

const anchor = document.createElement('div');
anchor.id = 'rcr-anchor';

if(document.querySelector('[data-selectable-paragraph]')) {
	document.querySelector('[data-selectable-paragraph]').insertAdjacentElement('beforebegin', anchor)
}

// wait for the store to connect to the background page
store.ready().then(() => {
	ReactDOM.render(
	  <Index 
	  store={store}
	  document={document} />,
	  document.getElementById('rcr-anchor')
	);
})
