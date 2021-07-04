import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from "../UI/Card";
function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.Title}</h2>
                <div className="expense-item__price">$ {props.Amount}</div>
            </div>
        </Card>
    )
}
export default ExpenseItem;