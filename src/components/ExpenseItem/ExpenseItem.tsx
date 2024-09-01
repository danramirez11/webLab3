import { Expense } from '../../types/types'
import './ExpenseItem.css'

interface ExpenseItemProps {
    expense: Expense
}

const ExpenseItem = ({expense}: ExpenseItemProps) => {

    return (
        <div className="expenseItem basic-swipeable-list__item">
            <p>${expense.amount}<b> {expense.name}</b></p>
            <p>{expense.category}</p>
            <p className='expenseItem-date'>{expense.date}</p>
        </div>
    )
}

export default ExpenseItem