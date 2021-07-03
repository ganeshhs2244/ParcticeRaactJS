import ExpenseList from "./Component/ExpenseList";
function App() {
  const expense = [{ Title: "Toilet Paper", Amount: 200, date: new Date(2020, 2, 28) },
      { Title: "Car Insurance", Amount: 500, date: new Date(2020, 2, 20)},
      { Title: "New Table", Amount: 300, date: new Date(2020, 2, 26) }]
  return (
    <div>
      <ExpenseList data={expense}></ExpenseList>
    </div>
  );
}

export default App;
