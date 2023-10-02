import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
	//React always uses the input of props for functions/components (an object holding all props)
	// const expenseDate = new Date(2021, 2, 28); //creating a date object with just JS
	// const expenseTitle = 'Car Insurance';
	// const expenseAmount = 294.67;
	//now all data is received from outside of the component via app.js (using the attributes of the components)

	//MDN doc for Button: https://developer.mozilla.org/en-US/docs/Web/API/HTMLButtonElement --> specifically the DOM interface (for listener and events)
	//onXXXXX props all need a function to work correctly, but WITHOUT the Parentheses in the prop
	//Because if you have clickHandler() then it will execute when the DOM is built/added when the JSX is executed
	//clickHandler is a reference that React interprets as the function to be executed on the event

	// const [title, setTitle] = useState(props.title); //useState() is a React hook that can ONLY be called within React components and non-nested components
	// !!! useState() needs a default value/variable !!! <-- you have to set the initial state !! (which can be done to se the state as the props from an underlying component)
	//useState() returns a function that is able to be used to return a new variable (as an array)
	// But we can use array destructuring to store each value in the array as individual variables (const in this case)
	// convention is to use const [value, setValue] to have the base value, then the function to update the value

	//   console.log("ExpenseItem evaluated by React"); // states are instances which are specific to the component in which they located in

	//!!!useState is needed to change the values of components dynamically!!!

	//best practice is to have Handler be the ending of your functions that are triggered by eventListeners
	// const clickHandler = () => {
	// setTitle('Updated!'); //calling the setTitle function here with the parameter of what we want it to change to
	//   // calling this setState() based function will cause the component to be called/rendered again, thus allowing dynamic change of the component via changing the state
	// 	console.log(title);
	// };
	//^ button for demo purposes

	//stateless / presentation components have no state, or are only there to present data/info to the user
	// aka as 'dumb' components
	return (
		<li>
			<Card className="expense-item">
				<ExpenseDate date={props.date} />
				<div className="expense-item__description">
					<h2>{props.title}</h2>
					<div className="expense-item__price">${props.amount}</div>
				</div>
			</Card>
		</li>
	);
};

export default ExpenseItem;

/* React Components are just JS Functions*/
