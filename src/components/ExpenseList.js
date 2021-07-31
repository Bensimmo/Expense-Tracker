import React, { useState } from "react";
import Card from "./Card";
import "./Expenses.css";
import ExpensesDisplay from "./ExpensesDisplay";
import ExpensesFilter from "./ExpensesFilter";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesDisplay items={filteredExpenses} />
      </Card>
    </li>
  );
};

export default ExpenseList;
