import Budget from "./components/Budget/Budget"
import ExpenseList from "./components/ExpenseList/ExpenseList"
import Filters from "./components/Filters/Filters"
import HeaderBar from "./components/HeaderBar/HeaderBar"
import Stats from "./components/Stats/Stats"

const App = () => {
    return (
        <>
        <HeaderBar></HeaderBar>
        <Budget></Budget>
        <Stats></Stats>
        <Filters></Filters>
        <ExpenseList></ExpenseList>
        </>
    )
}

export default App