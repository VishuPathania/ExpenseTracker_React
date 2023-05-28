import "./ExpenseItem.css";
function ExpenseItem(props) {
  
  //earlier we hard coded now we are getting values from props

  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2> {props.title}</h2> 
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
    //JSX code must only have 1 root element per return statement so wrapped it in another div
  );
}

export default ExpenseItem;
