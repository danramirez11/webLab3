import Budget from "./components/Budget/Budget"
import Filters from "./components/Filters/Filters"
import HeaderBar from "./components/HeaderBar/HeaderBar"
import NewExpense from "./components/NewExpense/NewxExpense"
import ResetButton from "./components/ResetButton/ResetButton"
import Stats from "./components/Stats/Stats"
import { useState } from 'react'
import ExpenseList from "./components/ExpenseList/ExpenseList"
import './theme/app.css'
import { BudgetType, Expense } from "./types/types"
import AddButton from "./components/AddButton/AddButton"

const App = () => {
    const [ expenses, setExpenses ] = useState<Expense[]>([])

    const [ budget, setBudget ] = useState<BudgetType>({
        total: 0,
        spent: 0,
    })

    const [ filter, setFilter ] = useState<string>("all")

    const [ showPopup, setShowPopup ] = useState<boolean>(false)

    const [ updateExpense, setUpdateExpense ] = useState<string | null>(null)

    const handleBudget = (newBudget: number) => {
        setBudget((prev) => {
            return {
                total: newBudget,
                spent: prev.spent
            }
        })
    }

    const handleNewExpense = (expense: Expense) => {

        if (updateExpense) {
            let oldExpense: Expense

            setExpenses((prev) => {
                return prev.map((exp) => {
                    if (exp.id === updateExpense) {
                        oldExpense = exp
                        return expense
                    } else {
                        return exp
                    }
                })
            })
            setUpdateExpense(null)

            setBudget((prev) => {
                return {
                    total: prev.total,
                    spent: 
                        prev.spent - Number(oldExpense.amount) + Number(expense.amount)
                }
            })
            return
        }

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

    const filterExpenses = (exp: Expense[]) => {
        if (filter === "all") {
            return exp
        } else {
            return exp.filter((expense) => {
                return expense.category === filter
    }, [])
    }}

    const handleDelete = (expense: Expense) => {
        setExpenses((prev) => {
            return prev.filter((exp) => {
                return exp.id !== expense.id
            })
        })

        setBudget((prev) => {
            return {
                total: prev.total,
                spent: prev.spent - Number(expense.amount)
            }
        })
    }

    const handleUpdate = (expense: Expense) => {
        setShowPopup(true)
        setUpdateExpense(expense.id)
    }

    const handlePopup = () => {
        setShowPopup(!showPopup)
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
            <ExpenseList expenseList = {filterExpenses(expenses)} onUpdate={handleUpdate} onDelete={handleDelete}></ExpenseList>
            <NewExpense onExpense = {handleNewExpense} showPopup = {showPopup} onChangePop={handlePopup}></NewExpense>
            <AddButton showPopup={showPopup} onChangePop={handlePopup}/>
            </>
        }
        </>
    )
}

export default App