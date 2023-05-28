function ExpenseItem() {
  return (
    <div>
      <div>Food Rs 10</div>
      <div>
        <h2> Petrol Rs 100</h2>
        <div>Movies Rs 200</div>
      </div>
    </div>
    //JSX code must only have 1 root element per return statement so wrapped it in another div
  );
}

export default ExpenseItem;
