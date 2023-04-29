import './css.css';
import { useState } from 'react';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import ExpenseFilter from './components/ExpenseFilter';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e6',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2020, 2, 12),
  },
  {
    id: 'e7',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: 'e8',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2020, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [filteredYear, setFilteredYear] = useState('2021');

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const showAddExpenseHandler = () => {
    setShowAddExpense(true);
  };

  const hideAddExpenseHandler = () => {
    setShowAddExpense(false);
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <div className="new-expense-button-container">
        <button onClick={showAddExpenseHandler}>Add Expense</button>
      </div>
      {showAddExpense && <NewExpense onAddExpense={addExpenseHandler} onHideAddExpense={hideAddExpenseHandler} />}
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <Expenses expenses={filteredExpenses} />
    </div>
  );
}

export default App;