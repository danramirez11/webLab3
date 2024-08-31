import Budget from "./components/Budget/Budget"
import Filters from "./components/Filters/Filters"
import HeaderBar from "./components/HeaderBar/HeaderBar"
import NewExpense from "./components/NewExpense/NewxExpense"
import ResetButton from "./components/ResetButton/ResetButton"
import Stats from "./components/Stats/Stats"
import { useState } from 'react'
import ExpenseList from "./components/ExpenseList/ExpenseList"
import './theme/app.css'
import { Expense } from "./types/types"

const App = () => {
    const [ expenses, setExpenses ] = useState<Expense[]>([])
    const [ budget, setBudget ] = useState({
        total: 0,
        spent: 0,
    })
    const [ filter, setFilter ] = useState<string>("all")

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
    }

    const handleReset = () => {
        setExpenses([])
        setBudget({
            total: 0,
            spent: 0
        })
        console.log(expenses)
    }

    const handleFilter = (newFilter: string) => {
        setFilter(newFilter)
        console.log(filter)
    }

    const filterExpenses = (exp: object) => {
        if (filter === "all") {
            return exp
        } else {
            return exp.filter((expense) => {
                return expense.category === filter
    }, [])
    }
}

    return (
        <>
        <HeaderBar></HeaderBar>
        {
            budget.total === 0 ? <Budget onBudget = {handleBudget}></Budget> :  
            <>
            <ResetButton onReset = {handleReset}></ResetButton>
            <Stats stats = {budget}></Stats>
            <Filters onFilter = {handleFilter}></Filters>
            <ExpenseList expenseList = {filterExpenses(expenses)}></ExpenseList>
            <NewExpense onExpense = {handleNewExpense}></NewExpense>
            </>
        }
        </>
    )
}

export default App