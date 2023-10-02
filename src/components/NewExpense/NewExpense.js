//render a form for users to input expense data

import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

//looking to pass the expenseData object created from ExpenseForm to NewExpense
//onSaveExpenseData is looking for a function that can be called WITHIN the ExpenseForm component AND this function needs to be defined in the NewExpense component

const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		// we are saying that there in some input data, which we will have as the data object generated when the ExpenseForm component is submitted
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.onAddExpense(expenseData);
		// console.log(expenseData);
        setAddNewExpenseMode(false);
	};

	//this also means that we expect to see a PROP of onSaveExpenseData within the ExpenseForm component, which is used to passed the child expenseData back up to the parent component of NewExpense

	const [addNewExpenseMode, setAddNewExpenseMode] = useState(false);

	const addNewExpenseHandler = () => {
		setAddNewExpenseMode(true);
	};

	const cancelAddNewExpenseHandler = () => {
		setAddNewExpenseMode(false);
	};

	// if (!addNewExpenseMode) {
	// 	return (
	// 		<form onSubmit={addNewExpenseHandler}>
	// 			<div className="add-new-expense__actions">
	// 				<button type="submit">Add New Expense</button>
	// 			</div>
	// 		</form>
	// 	);
	// }
	//within ExpenseForm, set the conditional that the Add new has been enabled
	//the NewExpense component should also be conditional to display either add new or the input setup
	//ExpenseForm is what has to be entirely changed based on the conditional, cannot do it piecemeal in NewExpense
	return (
		<div className="new-expense">
			{!addNewExpenseMode && (
				<button onClick={addNewExpenseHandler} type="submit">
					Add New Expense
				</button>
			)}
			{addNewExpenseMode && (
				<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelAddNewExpenseHandler} />
			)}
		</div>
	);
};

export default NewExpense;
