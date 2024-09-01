export interface Expense {
    id: string,
    name: string,
    amount: number,
    category: string,
    date: string
}

export interface BudgetType {
    total: number,
    spent: number
}