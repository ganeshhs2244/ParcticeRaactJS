import { data } from "autoprefixer";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';
function ExpenseList(props) {

    const expense = props.data;
    const Title = "Car Insurance";
    const Amount = 200;
    const date = new Date(2020, 2, 28);
    console.log(expense);
    return (
        <Card className="expenses">
            <ExpenseItem Title={expense[0].Title} Amount={expense[0].Amount} date={expense[0].date}></ExpenseItem>
            <ExpenseItem Title={expense[1].Title} Amount={expense[1].Amount} date={expense[1].date}></ExpenseItem>
            <ExpenseItem Title={expense[2].Title} Amount={expense[2].Amount} date={expense[2].date}></ExpenseItem>
 
        </Card>
    );

}
export default ExpenseList;