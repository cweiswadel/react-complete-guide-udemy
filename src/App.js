// function App() {
//   return (
//     <div>
//       <h2>Let's get started!</h2>
//     </div>
//   );
// }

// import ExpenseItem from "./components/ExpenseItem"; //importing a new component from the ./src/components folder
//lower case elements are built in HTML, uppercase are developer built react components!!!

import React from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';

//const App = () => {
  //<Component content within the curly braces
  // This is arrow function syntax for React components 
//}

//function App() {
  // <Component content within the curly braces>
  // This is the function syntax for React components 
//}


const App = () => {
	const expenses = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: "e2",
			title: "New TV",
			amount: 799.49,
			date: new Date(2021, 2, 12),
		},
		{
			id: "e3",
			title: "Car Insurance",
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: "e4",
			title: "New Desk (Wooden)",
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];

	/* 
  return React.createElement(
    'div',
    {},
    React.createElement('h2',{},"Let's get started!"),
    React.createElement(Expenses, {items: expenses})
  ); 
  */ 
  //  ^^past way to create React elements using import React from 'react';
  // JSX is using this at the end after some React methods being run to convert it for the browser/web

	return (
		<div>
			<NewExpense/>
			<Expenses expensesData={expenses} />
		</div>
	);
}
// when you create components, you can ONLY HAVE ONE ELEMENT RETURNED, meaning everything needs to be wrapped in a <div></div>
// you CANNOT have multiple elements NOT wrapped in a single element

/* JSX - JavaScript XML 
  The above code only works because of the npm start that runs the react scripts to translate this into the correct pure JS code  
*/

export default App;
/* Here the App component is exported for use by the index.js import statement */

/* How REACT Works
  - React allows you to create re-usable and reactive components consisting of HTML and JS (and CSS)
  - This is a Declarative approach
  - Meanwhile we only have to define the desired target state(s) and then React figures out the actual JS DOM instructions
    + Meaning no need to manually update the DOM each time we need to have elements update on a Click, on hover, etc.
    + No more document.createElement('p'), document.getElementById('root').append(...)

  From the example in this App.js file:
  - We want to render a h2 element with the text "Let's get started"
  - But we can add other HTML elements
*/
