import React, { useState } from "react";
import "./ExpenseForm.css";

// want users to select a title, pick a date, and input a value
const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState(''); // setting the initial state
	//^ defines the initial state enteredTitle as '' and defines a function setEnteredTitle('<new value>') to change the state
	// this is detaching the value/variable away from the component to prevent losing the value during the re-rendering of the component

	const [enteredAmount, setEnteredAmount] = useState(''); //setting the states and update state function for amount
	const [enteredDate, setEnteredDate] = useState(''); //setting the states and update state function for date
	// //^these three states are acceptable and usable for a component, but it is possible to condense them into one state

	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: "",
	// 	enteredAmount: "",
	// 	enteredDate: "",
	// }); // you can use an object to define a singular state

	const titleChangeHandler = (event) => {
		// console.log('Title changed!'); //will log this value on every keystroke within the title input
		// console.log(event);//default JS will return an object when you setup a change listener, which we can use to track the input from the user
		// console.log("titleChangeHandler: " + event.target.value); //event.target.value will hold the value of the input at the time at which the event was fired (so in this case, when it changed, or as a keystroke occurred)
		setEnteredTitle(event.target.value); // using the setState to change the title from the initial '' state to whatever the user's input is (upon the change event firing)
		//^ this is using the single state per input
		// setUserInput({
		// 	...userInput, //takes the object, pulls out all existing key-value pairs, applies it to whatever it is called in, and then
		// 	enteredTitle: event.target.value, //here it will allow the updating of a specific key-value pair with the specified values
		// });
		//^ this is using the object based version of setState
		//^ this method also depends on the previous state snapshot. WHENEVER you update state based on the previous, there is a better way (see below):

		// setUserInput((prevState) => {
		// 	return {
		// 		...prevState,
		// 		enteredTitle: event.target.value,
		// 	};
		// }); //when react executes this function, it will pull the prevState snapshot
		//^ this is to guarantee that the state snapshot received in prevState will be the most up to date considering ALL state updates that have been or are being made during the React lifestyle
	};

	const amountChangeHandler = (event) => {
		// console.log("amountChangeHandler: " + event.target.value);
		setEnteredAmount(event.target.value); //single state version

		// setUserInput({
		// 	...userInput, //takes the object, pulls out all existing key-value pairs, applies it to whatever it is called in, and then
		// 	enteredAmount: event.target.value, //here it will allow the updating of a specific key-value pair with the specified values
		// });

		// setUserInput((prevState) => {
		// 	return {
		// 		...prevState,
		// 		enteredAmount: event.target.value,
		// 	};
		// });
	};

	const dateChangeHandler = (event) => {
		// console.log("dateChangeHandler: " + event.target.value);
		setEnteredDate(event.target.value);

		// setUserInput({
		// 	...userInput, //takes the object, pulls out all existing key-value pairs, applies it to whatever it is called in, and then
		// 	enteredDate: event.target.value, //here it will allow the updating of a specific key-value pair with the specified values
		// });

		// setUserInput((prevState) => {
		// 	return {
		// 		...prevState,
		// 		enteredDate: event.target.value,
		// 	};
		// });
	};

    const submitHandler = (event) => {
        event.preventDefault(); //this will prevent reloading the page / sending a request to the server

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate), // converting it to a date object
        }

        // console.log(expenseData); //console logging the expenseData object when the form is submitted
        props.onSaveExpenseData(expenseData); // executing the prop of onSaveExpenseData which in the NewExpense component we defined as onSaveExpenseData={saveExpenseDataHandler}
        //^ which when we pass in our expenseData object we are then sending this data from the child component ExpenseForm to NewExpense
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        //^setting all the states to an empty string on submit of the form (to clear the value), but it still creating the expenseData object with what the user input
        //this is TWO WAY BINDING because we are creating the object of the users input but also resetting the form for another use

    };

    //form HTML elements emit an event when the form is submitted (or any button with type submit is clicked)
    //when you submit this form then the page reloads because the browser sends a request to the host server (this is default behavior)
	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={enteredTitle} onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
                        value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2023-05-01"
						max="2026-12-31"
                        value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
