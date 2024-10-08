import { Expense } from "../../types/types"
import 'react-swipeable-list/dist/styles.css';
import ExpenseItem from "../ExpenseItem/ExpenseItem";

interface ExpenseListProps {
    expenseList: Expense[],
    onDelete: (expense: Expense) => void,
    onUpdate: (expense: Expense) => void
}

const ExpenseList = ({expenseList, onDelete, onUpdate}: ExpenseListProps) => {

    const handleDeleteClick = (exp: Expense) => {
        onDelete(exp)
    }

    const handleUpdateClick = (exp: Expense) => {
        onUpdate(exp)
    }
      
    return (
        <section>
            <h3>Expense List</h3>
            {expenseList.map((expense, index) => {
                return (
                    <div className="expenseItemWrapper">
                    <button className="deleteBtn" onClick={() => handleDeleteClick(expense)}>Delete</button>
                    <ExpenseItem key = {index} expense = {expense}></ExpenseItem>
                    <button className="updateBtn" onClick={() => {handleUpdateClick(expense)}}>Update</button>
                    </div>
                )
            })}
        </section>
    )
}

export default ExpenseList