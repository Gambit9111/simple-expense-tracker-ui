import "./index.css";
import MainLayout from "./components/MainLayout";
import expenseService from "./services/expenses";
import { useState, useEffect } from "react";
import utils from "./utils";


function App() {
  const [expenses, setExpenses] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [totalExpenses, setTotalExpenses] = useState(0);

  // fetch expenses from server
  useEffect(() => {
    expenseService.getAll().then((initialExpenses) => {
      setExpenses(initialExpenses);
    });
  }, []);

  // add new expense to server
  const addExpense = (event) => {
    event.preventDefault();
    // round the amount to 2 decimal places
    const roundedAmount = parseFloat(newAmount).toFixed(2)
    const expenseObject = {
      name: newName,
      amount: roundedAmount,
    };

    // check if expense name or amount is empty
    if (newName === "" || newAmount === "") {
      alert("Please enter a name and amount");
      return;
    }
    // check if amount is positive number
    if (roundedAmount < 0 || roundedAmount == 0) {
      alert("Please enter a positive number");
      return;
    }
    // if all good create new expense
    expenseService.create(expenseObject).then((returnedExpense) => {
      setExpenses(expenses.concat(returnedExpense));
      setNewName("");
      setNewAmount("");
    });
  };

  // delete expense from server
  const deleteExpense = (id) => {
    const expense = expenses.find((n) => n.id === id);
    const ok = window.confirm(`Delete ${expense.name}?`);
    if (ok) {
      expenseService.remove(id).then(() => {
        setExpenses(expenses.filter((n) => n.id !== id));
      });
    }
  };

  // handlers for input fields
  const nameHandler = (event) => {
    setNewName(event.target.value);
  };
  const amountHandler = (event) => {
    setNewAmount(event.target.value);
  };

  // reverse the order of the expenses
  const reversedExpenses = expenses.slice().reverse();

  // calculate total expenses
  useEffect(() => {
    setTotalExpenses(utils.calculateTotalExpenses(expenses));
  }, [expenses]);

  return (
    <div className="h-screen w-sceen flex justify-center items-center bg-black bg-opacity-70">
      <MainLayout
        expenses={reversedExpenses}
        addExpense={addExpense}
        deleteExpense={deleteExpense}
        newName={newName}
        nameHandler={nameHandler}
        newAmount={newAmount}
        amountHandler={amountHandler}
        totalExpenses={totalExpenses.toFixed(2)}
      />
    </div>
  );
}

export default App;
