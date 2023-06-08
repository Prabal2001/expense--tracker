import "./Expenses.css";
import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
function Expenses(props){

    return(
        <div className="expenses">
            {
                props.item.map(
                    expense =>(
                        <ExpenseItem 
                        date={expense.date} 
                        title={expense.title} 
                        amount={expense.amount} />
                    )
                )
            }
        {/* //  <ExpenseItem 
        // date={props.item[0].date} 
        // title={props.item[0].title} 
        // amount={props.item[0].amount} />
        // <ExpenseItem
        //  date={props.item[1].date} 
        // title={props.item[1].title} 
        // amount={props.item[1].amount} />
        // <ExpenseItem
        //  date={props.item[2].date} 
        // title={props.item[2].title} 
        // amount={props.item[2].amount} /> */}
        </div>
    )
}


export default Expenses;