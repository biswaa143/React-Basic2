import React, {useState} from "react";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: "Car Insurance",
    amount: 15000,
    date: new Date(2023, 2, 23),
  },
  {
    id: 'e2',
    title: "Electric Bill",
    amount: 5000,
    date: new Date(2022, 3, 30),
  },
  {
    id: 'e3',
    title: "Fooding",
    amount: 10000,
    date: new Date(2021, 4, 10),
  },
  {
    id: 'e4',
    title: "Gaming Setup",
    amount: 250000,
    date: new Date(2020, 5, 13),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  //Using JSX
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, {items: expenses})
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
