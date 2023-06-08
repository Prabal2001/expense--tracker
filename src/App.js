
import React, { useState } from "react";
import Expenses from "./components/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
// import ExpenseItem from "./components/ExpenseItem.js";
let DUMMY_EXP=[
    {
      id:2012,
      amount:245,
      title:"Car Washing",
      date:new Date(2022,12,31),
    },
    {
    id:2013,
    amount:223,
    title:"Household work",
    date:new Date(2022,12,31),
    },
    {
    id:2014,
    amount:134,
    title:"Bank Loan",
    date:new Date(2022,12,31),
    }
]
function App(){

    const[expenses,setExpenses]=useState(DUMMY_EXP);
    const addExpenseHandler =(exp) =>{
        const updatedExpense=[exp,...expenses];
        setExpenses(updatedExpense);
    }
   
    return (
    <div >
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses item={expenses} ></Expenses>
        </div>
    ) 
}
export default App;