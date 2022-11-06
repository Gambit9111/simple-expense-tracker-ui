const calculateTotalExpenses = (expenses) => {
    let total = 0;
    expenses.forEach((expense) => {
      total += Number(expense.amount);
    });
    return total;
  }

export default { calculateTotalExpenses };