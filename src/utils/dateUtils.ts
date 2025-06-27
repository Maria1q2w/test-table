export function getMonthIndices(offset: number): number[] {
    const now = new Date();
    const currentMonth = now.getMonth();
    return Array.from({length: 6}, (_, i) => 
        (12 + currentMonth - 5 + i + offset) % 12
    )
}

export const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]