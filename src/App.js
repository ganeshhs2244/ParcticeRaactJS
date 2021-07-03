import ExpenseItem from "./Component/ExpenseItem";
function App() {
  const expense = [{ Title: "Toilet Paper", Amount: 200, date: new Date(2020, 2, 28) },
      { Title: "Car Insurance", Amount: 500, date: new Date(2020, 2, 20)},
      { Title: "New Table", Amount: 300, date: new Date(2020, 2, 26) }]
  return (
    <div>
      <ExpenseItem Title={expense[0].Title} Amount={expense[0].Amount} date={expense[0].date}></ExpenseItem>
      <ExpenseItem  Title={expense[1].Title} Amount={expense[1].Amount} date={expense[1].date}></ExpenseItem>
      <ExpenseItem  Title={expense[2].Title} Amount={expense[2].Amount} date={expense[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
