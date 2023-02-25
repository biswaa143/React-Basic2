import React from "react";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 15000,
      date: new Date(2023, 2, 23),
    },
    {
      title: "Electric Bill",
      amount: 5000,
      date: new Date(2023, 3, 30),
    },
    {
      title: "Fooding",
      amount: 10000,
      date: new Date(2023, 4, 10),
    },
    {
      title: "Gaming Setup",
      amount: 250000,
      date: new Date(2023, 5, 13),
    },
  ];

  //Using JSX
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
  // );

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
