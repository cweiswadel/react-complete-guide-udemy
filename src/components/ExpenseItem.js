import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //React always uses the input of props for functions/components (an object holding all props)
  // const expenseDate = new Date(2021, 2, 28); //creating a date object with just JS
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.67;
  //now all data is received from outside of the component via app.js (using the attributes of the components)

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

/* React Components are just JS Functions*/
