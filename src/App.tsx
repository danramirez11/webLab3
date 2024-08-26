import Budget from "./components/Budget/Budget"
import Filters from "./components/Filters/Filters"
import HeaderBar from "./components/HeaderBar/HeaderBar"
import NewExpense from "./components/NewExpense/NewxExpense"
import Stats from "./components/Stats/Stats"
import { useState } from 'react'

const App = () => {
    const [ expenses, setExpenses ] = useState<object[]>([])
    const [ budget, setBudget ] = useState({
        total: 0,
        spent: 0,
    })

    const handleBudget = (newBudget) => {
        setBudget((prev) => {
            return {
                total: newBudget,
                spent: prev.spent
            }
        })
    }

    const handleNewExpense = (expense) => {
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

    return (
        <>
        <HeaderBar></HeaderBar>
        <Budget onBudget = {handleBudget}></Budget>
        <Stats stats = {budget}></Stats>
        <Filters></Filters>
        <NewExpense onExpense = {handleNewExpense}></NewExpense>
        </>
    )
}

export default App