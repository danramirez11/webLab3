import Budget from "./components/Budget/Budget"
import Filters from "./components/Filters/Filters"
import HeaderBar from "./components/HeaderBar/HeaderBar"
import NewExpense from "./components/NewExpense/NewxExpense"
import ResetButton from "./components/ResetButton/ResetButton"
import Stats from "./components/Stats/Stats"
import { useState } from 'react'
import ExpenseList from "./components/ExpenseList/ExpenseList"

const App = () => {
    const [ expenses, setExpenses ] = useState<object[]>([])
    const [ budget, setBudget ] = useState({
        total: 0,
        spent: 0,
    })

    const handleBudget = (newBudget: number) => {
        setBudget((prev) => {
            return {
                total: newBudget,
                spent: prev.spent
            }
        })
    }

    const handleNewExpense = (expense: object) => {
        setExpenses((prev) => {
            return [expense, ...prev]
        })

        setBudget((prev) => {
            return {
                total: prev.total,
                spent: prev.spent + Number(expense.amount)
        }})

        console.log(expenses)
        console.log(budget)
    }

    const handleReset = () => {
        setExpenses([])
        setBudget({
            total: 0,
            spent: 0
        })
        console.log(expenses)
    }

    return (
        <>
        <HeaderBar></HeaderBar>
        {
            budget.total === 0 ? <Budget onBudget = {handleBudget}></Budget> :  
            <>
            <ResetButton onReset = {handleReset}></ResetButton>
            <Stats stats = {budget}></Stats>
            <Filters></Filters>
            <ExpenseList expenseList = {expenses}></ExpenseList>
            <NewExpense onExpense = {handleNewExpense}></NewExpense>
            </>
        }
        </>
    )
}

export default App