import { SwipeableList } from "react-swipeable-list";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpenseList = () => {
    return (
        <section>
            <h3>Expense List</h3>
            <SwipeableList>
               <ExpenseItem></ExpenseItem>
            </SwipeableList>
        </section>
    )
}

export default ExpenseList;
