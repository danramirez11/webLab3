export interface Expense {
    name: string,
    amount: number,
    category: string,
    date: string
}

export interface BudgetType {
    total: number,
    spent: number
}