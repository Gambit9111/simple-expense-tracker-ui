function Expenses({expenses, deleteExpense}) {
  return (
    <div className="flex flex-col justify-center items-center">
      {expenses.map((expense) => (
        <div
          key={expense.id}
          className="flex flex-row justify-center items-center w-11/12 h-12 bg-blue-200 rounded-xl my-2"
        >
          <div className="basis-1/4 text-center">{expense.name}</div>
          <div className="basis-1/4 text-center">{expense.amount}</div>
          <div className="basis-1/4 text-center">{expense.date}</div>
          <div className="basis-1/4 text-center">
            <button onClick={() => deleteExpense(expense.id)} className="bg-blue-100 px-2 rounded-xl hover:bg-red-300">
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
;

export default Expenses;
