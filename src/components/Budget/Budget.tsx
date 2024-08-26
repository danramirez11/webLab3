import { useState } from 'react';

const Budget = ({onBudget}) => {
    const [ budgetInput, setBudgetInput ] = useState(0)

    const handleChange = (e: Event) => {
        e.preventDefault()
        const { value } = e.target;
        setBudgetInput(value)
    }

    const handleSubmit = (e: Event) => {
        e.preventDefault()
        onBudget(budgetInput)
    }

    return (
        <section>
            <h2>Define Budget</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="number" name="budget" onChange={handleChange}/>
                <button type="submit">Define Budget</button>
            </form>
        </section>
    );
}

export default Budget;