import ExpenseItem from "../ExpenseItem/ExpenseItem"

const ExpenseList = ({expenseList}) => {
    return (
        <section>
            <h3>Expense List</h3>
            {expenseList.map((expense, index) => {
                return (
                    <ExpenseItem expense = {expense}></ExpenseItem>
                )
            })}
        </section>
    )
}

export default ExpenseList