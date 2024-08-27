import './ExpenseItem.css'

const ExpenseItem = ({expense}) => {

    return (
        <div className="expenseItem">
            <p className="expenseItem-name">${expense.amount}<b> {expense.name}</b></p>
            <p className="expenseItem-cat">{expense.category}</p>
        </div>
    )
}

export default ExpenseItem