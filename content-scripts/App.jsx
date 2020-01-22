import React from "react";
import ReactDOM from "react-dom";
import Index from "./components/";

const anchor = document.createElement('div');
anchor.id = 'rcr-anchor';

document.body.insertBefore(anchor, document.body.childNodes[0]);

ReactDOM.render(
  <Index document={document} />,
  document.getElementById("rcr-anchor")
);
