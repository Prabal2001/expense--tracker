import React,{useState} from "react";
import './ExpenseForm.css';
const  ExpenseForm =(props) => {

   const[enteredTitle,setenteredTitle]=useState("");
   const[enteredAmount,setenteredAmount]=useState("");
   const[enteredDate,setenteredDate]=useState("");
    const titleChangeHandler = (event) =>{
        setenteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) =>{
        setenteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) =>{
        setenteredDate(event.target.value);
    }
    const submitHandler =(event) =>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
        setenteredTitle('');
        setenteredAmount("");
        setenteredDate("");
    }

    return (
       <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control label">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
            <div className="new-expense__control label">
            <label>Amount</label>
            <input type="number"  min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
            <div className="new-expense__control label">
            <label> Date </label>
            <input type="date"  value={enteredDate} onChange={dateChangeHandler}></input>

        </div>
 </div>
          <div className="new-expense__actions">
            <button type="submit"> Submit </button>
          </div>
       </form>
    )
}

export default ExpenseForm;