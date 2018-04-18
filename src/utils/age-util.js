export const getCurrentAge = (day, month, year) => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getUTCMonth() + 1
    const currentDay = currentDate.getUTCDate()
    let age = currentYear - year

    if (currentMonth > month || currentDay >= day) {
        return `${age}yo`
    } else {
        age--
        return `${age}yo`
    }
}
