import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
	const [yearFilter, setYearFilter] = useState("2020");

	const filterChangeHandler = (selectedFilter) => {
		// console.log("Selected: " + selectedFilter + " from Expenses Component");
		setYearFilter(selectedFilter);
	};

	// let expenseItemArr = []; //init empty array for storing ExpenseItem components

	//props.expensesData is the array in App.js which will pass all key value pairs for rendering the ExpenseItem(s)
	// for (let j = 0; j < props.expensesData.length; j++) {
	// 	const ExpenseItemComp = (
	// 		<ExpenseItem
	// 			key={props.expensesData[j].id}
	// 			title={props.expensesData[j].title}
	// 			amount={props.expensesData[j].amount}
	// 			date={props.expensesData[j].date}
	// 		/>
	// 	);
	// 	expenseItemArr.push(ExpenseItemComp);
	// }

	const filteredExpenses = props.expensesData.filter((expense) => {
		return expense.date.getFullYear().toString() === yearFilter;
	});

	let expensesContent = <p> No expenses found.</p>; // JSX can be stored in variables
	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
				year={expense.date.getFullYear()}
			/>
		));
	}

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selectedFilter={yearFilter}
					onChangeFilter={filterChangeHandler}
				/>
			{expensesContent}
			</Card>
		</div>
	); //return the array of ExpenseItem(s) in order to render them all as the output comp Expenses
};

export default Expenses;
