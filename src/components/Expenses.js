import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const { expenses } = props;

  return (
    <div>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
