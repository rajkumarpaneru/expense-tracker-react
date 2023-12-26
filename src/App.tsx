import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  return (
    <>
      <ExpenseForm />
      <ExpenseFilter />
      <ExpenseList
        expenses={expenses}
        onDelete={() => console.log("deleted")}
      />
    </>
  );
}

export default App;
