import Budget from "./components/Budget/Budget"
import Filters from "./components/Filters/Filters"
import HeaderBar from "./components/HeaderBar/HeaderBar"
import NewExpense from "./components/NewExpense/NewxExpense"
import Stats from "./components/Stats/Stats"

const App = () => {
    return (
        <>
        <HeaderBar></HeaderBar>
        <Budget></Budget>
        <Stats></Stats>
        <Filters></Filters>
        <NewExpense></NewExpense>
        </>
    )
}

export default App