import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // multiple states
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enterdAmount, setEnteredAmount] = useState('');
  const [enterdDate, setEnteredDate] = useState('');
  // const [click, setClick] = useState(false);

  //one state 
  // const [userInput, setUserInput] = useState({// another way of states
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  // functions to Handler the open and cancel button
  // const buttonAddHandler = () => {
  //   setClick(true);
  // }
  // const closeForm = () => {
  //   setClick(false);
  // }

  const titleChangeHandler = (event) => {
    //one state method
    setEnteredTitle(event.target.value);

    // object state method
    // if you state update depends on the previous state use this function form 
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    //one state method
    setEnteredAmount(event.target.value);

    // object state method
    // if you state update depends on the previous state use this function form 
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };


  const dateChangeHandler = (event) => {
    // one state method
    setEnteredDate(event.target.value);

    // object state method
    // if you state update depends on the previous state use this function form 
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault() // this method prevents the reload page, without sending any request anywhere

    //create a object once the form is submitted
    const expenseData = {
      title: enteredTitle,
      amount: +enterdAmount,
      date: new Date(enterdDate),
    };

    props.onSaveExpenseData(expenseData)
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    // // after submit the form click return to false
    // setClick(false)
  };
  // if (click === false) {
  //   return (
  //     <div className="add-new-expense">
  //       <button onClick={buttonAddHandler}>Add New Expense</button>
  //     </div>
  //   );
  // }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' value={enterdAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type='date' min='2019-01-01' step='2022-12-31' value={enterdDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        {/* <button onClick={closeForm}>cancel</button> */}
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;