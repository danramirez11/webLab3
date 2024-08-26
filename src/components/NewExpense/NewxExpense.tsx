import { useState } from 'react';

const NewExpense = ({onExpense}) => {
    const [formData, setFormData] = useState({
        name: 'Expense without name',
        amount: 0, 
        category: 'No category',
        date: '',
    });

    const handleChange = (e: any) => {
        e.preventDefault()
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

    const handleSubmit = (e: any) => {
        e.preventDefault()
        onExpense(formData)
    }

    return (
        <div>
            <section>
                <h3>NEW EXPENSE</h3>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onChange={handleChange}/>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount" onChange={handleChange}/>
                    <label htmlFor="category">Category</label>
                    <select name="category" id="" onChange={handleChange}>
                        <option value="no category">No category</option>
                        <option value="food">Food</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="clothing">Clothing</option>
                        <option value="rent">Rent</option>
                        <option value="other">Other</option>
                    </select>
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" onChange={handleChange}/>
                    <button type="submit">Add Expense</button>
                </form>
            </section>
        </div>
    )
}

export default NewExpense;