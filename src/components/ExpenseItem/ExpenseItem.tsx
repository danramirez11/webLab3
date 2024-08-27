import './ExpenseItem.css'

const ExpenseItem = ({expense}) => {

    return (
        <div className="expenseItem">
            <p>${expense.amount}<b> {expense.name}</b></p>
            <p>{expense.category}</p>
        </div>
    )
}

export default ExpenseItem