import React from "react";
import ReactDOM from "react-dom";
import Index from "./components/";
import {Provider} from 'react-redux';
import {Store} from 'webext-redux';
const store = new Store();

const Element = document.createElement("div");
Element.setAttribute("id", "dfghbnjmERHJKFGHNMVBNMFBNMbmvvxnbdgf");
Element.className = 'rootStyle';
document.body.appendChild(Element);

// demo comment
// wait for the store to connect to the background page
store.ready().then(() => {
	ReactDOM.render(
	  <Index store={store} style={{width: 'maxContent!important'}} />,
	  document.getElementById("dfghbnjmERHJKFGHNMVBNMFBNMbmvvxnbdgf")
	);
})
