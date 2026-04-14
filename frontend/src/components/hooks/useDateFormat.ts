export const useDateFormat = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const dayInWords = date.toLocaleDateString('en-US', { weekday: 'long' });
    const monthInWords = date.toLocaleDateString('en-US', { month: 'long' });

    return {
        dayInWords,
        day,
        monthInWords,
        month,
        year
    }
}