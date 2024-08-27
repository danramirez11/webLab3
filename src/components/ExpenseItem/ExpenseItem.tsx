const ExpenseItem = ({expense}) => {
    return (
        <div>
            <p>{expense.name}</p>
            <p>{expense.amount}</p>
            <p>{expense.category}</p>
        </div>
    )
}

export default ExpenseItem