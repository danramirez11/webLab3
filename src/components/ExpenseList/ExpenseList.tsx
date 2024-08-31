import ExpenseItem from "../ExpenseItem/ExpenseItem"

interface ExpenseListProps {
    expenseList: {
        name: string,
        amount: number,
        category: string
    }[]
}

const ExpenseList = ({expenseList}: ExpenseListProps) => {
    return (
        <section>
            <h3>Expense List</h3>
            {expenseList.map((expense, index) => {
                return (
                    <ExpenseItem key = {index} expense = {expense}></ExpenseItem>
                )
            })}
        </section>
    )
}

export default ExpenseList