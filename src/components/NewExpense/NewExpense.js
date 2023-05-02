//render a form for users to input expense data

import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";;

const NewExpense = () => {
    return <div className="new-expense">
        <ExpenseForm/>
    </div>
};

export default NewExpense;