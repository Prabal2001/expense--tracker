import ExpenseDate from './ExpenseDate';
import React,{useState} from 'react';
import './ExpenseItem.css';
function ExpenseItem(props){
  //  const[newTitle,setnewTitle]=useState("");
  //  const[title,setTitle]=useState(props.title);
  //   const clickHandler=()=>{
  //    setTitle(newTitle);
  //   }
  //   const changeHandler=(event)=>{
  //     setnewTitle(event.target.value);
  //   }
    return (
        <div className='expense-item'>
          <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
            <h2> {props.title} </h2>
            <div className='expense-item__price'> ${props.amount} </div>
            </div>
            {/* <input type="text" value={newTitle} onChange={changeHandler}></input>
         <button onClick={clickHandler}>Change Title</button> */}
         </div>
    )
}
export default ExpenseItem;