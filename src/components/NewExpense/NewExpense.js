import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense= (props) =>{
  const saveExpenseDataHandler =(entered) =>{
                  const expensedata={
                          ...entered,
                          id:Math.random().toString
                  }
                  console.log(expensedata);
                  props.onAddExpense(expensedata);
  }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )

}

export default NewExpense;