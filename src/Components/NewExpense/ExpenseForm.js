import React, { useState } from "react";
import "./ExpenseForm.css";

//switched to multiple states 
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

      //const[userInput, setUserInput] =useState({
        //enteredTitle:'',
        //enteredAmount:'',
        //enteredDate:'',
      //});
      
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //using spread operator so amt and date not lose after title update
    //setUserInput({
      //...userInput,
      //enteredTitle: event.target.value ,
    //})
  }; 
  //USING FUNCTION AS STATE UPDATE DEPEND ON PREV STATE so may have outdated state 
  //screenshot as react schedules state updates not done instantly
  //so below will ensure latest snapshot of states
  //setUserInput((prevState) =>{
    //return { ...prevState, enteredTitle:event.target.value};
  //})

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //setUserInput({
      //...userInput,
      //enteredAmount: event.target.value ,
  //});
};

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
   //setUserInput({
    //...userInput,
    //enteredDate: event.target.value ,  
   
  //});
}; 

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount:enteredAmount,
      date: new Date(enteredDate)
    };
    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2025-01-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" > Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
