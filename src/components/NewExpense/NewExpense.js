//render a form for users to input expense data

import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

//looking to pass the expenseData object created from ExpenseForm to NewExpense
//onSaveExpenseData is looking for a function that can be called WITHIN the ExpenseForm component AND this function needs to be defined in the NewExpense component

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => { // we are saying that there in some input data, which we will have as the data object generated when the ExpenseForm component is submitted
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
        // console.log(expenseData);
    };

    //this also means that we expect to see a PROP of onSaveExpenseData within the ExpenseForm component, which is used to passed the child expenseData back up to the parent component of NewExpense
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
};

export default NewExpense;