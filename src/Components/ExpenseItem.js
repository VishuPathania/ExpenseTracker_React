import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate = new Date(2023, 4, 29);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 500.0;
  const locationOfExpenditure = "Misc";

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2> {expenseTitle}</h2>
        <h2> {locationOfExpenditure} </h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
    //JSX code must only have 1 root element per return statement so wrapped it in another div
  );
}

export default ExpenseItem;
