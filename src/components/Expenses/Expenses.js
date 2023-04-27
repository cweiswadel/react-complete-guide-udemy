import React from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) =>  {
	let expenseItemArr = []; //init empty array for storing ExpenseItem components

	//props.expensesData is the array in App.js which will pass all key value pairs for rendering the ExpenseItem(s)
	for (let j = 0; j < props.expensesData.length; j++) {
		const ExpenseItemComp = (
			<ExpenseItem
				key={props.expensesData[j].id}
				title={props.expensesData[j].title}
				amount={props.expensesData[j].amount}
				date={props.expensesData[j].date}
			/>
		);
		expenseItemArr.push(ExpenseItemComp);
	}
	return <Card className="expenses">{expenseItemArr}</Card>; //return the array of ExpenseItem(s) in order to render them all as the output comp Expenses
}

export default Expenses;
