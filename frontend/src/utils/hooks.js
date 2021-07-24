export const useBookingPast = (booking) => {
    if(!booking) return false;

    const endDate = new Date(booking.endTime);
    const now = new Date();

    return now.getTime() - endDate.getTime() > 0;
};
