import React from "react";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  // 	document.addEventListener('click', () => {
  // 		let blogText = ''
  // 		if(document) {
  // 			const content = document.querySelectorAll('[data-selectable-paragraph]')
  // 			console.log('Content')
  // 			console.log(content)
  // 			content.forEach((c, index) => {
  // 			  blogText = `${blogText} ${c.innerText}`
  // 			})
  // 		}
  // 		console.log('Blog Text')
  // 		console.log(blogText)
  // 	})
  // }

  render() {
  	console.log('hello wors')
  	let blogText = ''
  	if(document) {
  		const content = document.querySelectorAll('[data-selectable-paragraph]')
  		console.log('Content')
  		console.log(content)
  		content.forEach((c, index) => {
  		  blogText = `${blogText} ${c.innerText}`
  		})
  	}
  	console.log('Blog Text')
  	console.log(blogText)
    return <div>{blogText}</div>;
  }
}
