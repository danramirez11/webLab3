import './ExpenseItem.css'

interface ExpenseItemProps {
    expense: {
        name: string,
        amount: number,
        category: string
    }
}

const ExpenseItem = ({expense}: ExpenseItemProps) => {

    return (
        <div className="expenseItem">
            <p>${expense.amount}<b> {expense.name}</b></p>
            <p>{expense.category}</p>
        </div>
    )
}

export default ExpenseItem