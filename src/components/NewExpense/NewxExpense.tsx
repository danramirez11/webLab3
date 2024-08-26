const NewExpense = () => {
    return (
        <div>
            <section>
                <h3>NEW EXPENSE</h3>
                <form action="">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount" />
                    <label htmlFor="category">Category</label>
                    <select name="category" id="">
                        <option value="food">Food</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="clothing">Clothing</option>
                        <option value="rent">Rent</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" />
                    <button type="submit">Add Expense</button>
                </form>
            </section>
        </div>
    )
}

export default NewExpense;