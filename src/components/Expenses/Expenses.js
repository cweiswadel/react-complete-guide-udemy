import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

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



	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selectedFilter={yearFilter}
					onChangeFilter={filterChangeHandler}
				/>
			< ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	); //return the array of ExpenseItem(s) in order to render them all as the output comp Expenses
};

export default Expenses;
