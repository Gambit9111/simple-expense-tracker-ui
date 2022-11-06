import Header from "./Header";
import ExpenseInput from "./ExpenseInput";
import Expenses from "./Expenses";

function MainLayout({
  expenses,
  addExpense,
  deleteExpense,
  newName,
  nameHandler,
  newAmount,
  amountHandler,
  totalExpenses,
}) {
  return (
    <div className="w-11/12 h-[95vh] bg-blue-100 overflow-auto">
      {/* header */}
      <Header totalExpenses={totalExpenses}/>
      {/* expense input */}
      <ExpenseInput
        newName={newName}
        nameHandler={nameHandler}
        newAmount={newAmount}
        amountHandler={amountHandler}
        addExpense={addExpense}
      />
      {/* expenses */}
      <Expenses expenses={expenses} deleteExpense={deleteExpense}/>
    </div>
  );
}

export default MainLayout;
