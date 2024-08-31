import { ChangeEvent, FormEvent, useState } from 'react';

interface BudgetProps {
    onBudget: (budget: number) => void
}

const Budget = ({onBudget}: BudgetProps) => {
    const [ budgetInput, setBudgetInput ] = useState(0)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const { value } = e.target;
        setBudgetInput(Number(value))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onBudget(budgetInput)
    }

    return (
        <section>
            <h3>Define Budget</h3>
            <form action="" onSubmit={handleSubmit}>
                <input type="number" name="budget" onChange={handleChange}/>
                <button type="submit">Define Budget</button>
            </form>
        </section>
    );
}

export default Budget;