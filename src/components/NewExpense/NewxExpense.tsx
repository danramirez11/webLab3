import { ChangeEvent, FormEvent, useState } from 'react';
import { Expense } from '../../types/types';
import './NewExpense.css'

interface NewExpenseProps {
    onExpense: (expense: Expense) => void,
    showPopup: boolean,
    onChangePop: () => void,
    update: Expense | null
}

const NewExpense = ({onExpense, showPopup, onChangePop, update}: NewExpenseProps) => {
    const today = new Date().toISOString().split('T')[0];

    const [formData, setFormData] = useState({
        id: '1234',
        name: 'Expense without name',
        amount: 0, 
        category: 'No category',
        date: today,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormData((prevData) => ({ ...prevData, id: update ? update.id : Math.random().toString().slice(2).substring(0, 4) }));
        onExpense(formData)
        onChangePop()
        
    }

    return (
        <>

        <div className='popup'
            style={{
                    display: showPopup ? 'block' : 'none'
            }}
            onClick={onChangePop}
            >
        </div>
            
        <section className='popup-section'
            style={{
                display: showPopup ? 'block' : 'none'
            }}>
            <h3>New Expense</h3>
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
                <input type="date" name="date" value={today}  onChange={handleChange}/>
                <button type="submit">Add Expense</button>
            </form>
        </section>
        </>
    )
}

export default NewExpense;