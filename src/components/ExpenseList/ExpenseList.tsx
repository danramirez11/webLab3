import { Expense } from "../../types/types"
import ExpenseItem from "../ExpenseItem/ExpenseItem"

interface ExpenseListProps {
    expenseList: Expense[]
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