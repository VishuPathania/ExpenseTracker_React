import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem =(props) => {
    const [amount, setAmount] = useState(props.amount) ;
 
  const clickHandler= () => {
    setAmount(' ');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/> 
      <div className="expense-item__description">
        <h2> {props.title}</h2> 
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Delete Expense</button>
      </div>
    </Card>
  
  );
}

export default ExpenseItem;
