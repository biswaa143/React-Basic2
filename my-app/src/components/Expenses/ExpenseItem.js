import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setTitle2] = useState(props.amount);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };
  
  const clickHandler2 = () => {
    setTitle2('$100');
    console.log(amount);
  };

  return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickHandler2}>Change Amount</button>
    </Card>
  );
}

export default ExpenseItem;