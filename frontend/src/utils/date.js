export const formatDate = (date) => {
    if(!date) {
        return "";
    }
    const dateFragments = date.split("-");
    const [year, month, dayTime] = [...dateFragments];

    const time = dayTime.split('T')[1];
    const day = dayTime.split('T')[0];

    return `${month}/${day}/${year} at ${time}`;
};

export const formatFromDb = (date) => {
    if(!date) return "";

    const partialFormat = formatDate(date);
    return partialFormat.split('.')[0];
};