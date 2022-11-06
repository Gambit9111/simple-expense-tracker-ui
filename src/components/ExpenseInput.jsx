function ExpenseInput({
  newName,
  nameHandler,
  newAmount,
  amountHandler,
  addExpense,
}) {
  return (
    <div className="flex justify-center items-center p-3">
      <form onSubmit={addExpense}>
        <div className="pb-2">
          <input
            className="outline-none bg-blue-200 rounded"
            type="text"
            value={newName}
            onChange={nameHandler}
            placeholder="  Name..."
          />
        </div>
        <div className="pb-2">
          <input
            className="outline-none bg-blue-200 rounded"
            type="float"
            value={newAmount}
            onChange={amountHandler}
            placeholder="  Amount..."
          />
        </div>
        <div className="flex justify-center items-center py-1 bg-blue-200 hover:bg-blue-100 rounded-xl">
          <button
            className="bg-blue-100 px-10 rounded-xl hover:bg-blue-200"
            type="submit">
            add
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseInput;
