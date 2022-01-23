import axios from '../../utils/axios';

export const postBooking = data => {
  return {
    type: 'POST_BOOKING',
    payload: axios.post('booking', data),
  };
};
export const getDataBookingByUserId = id => {
  return {
    type: 'GET_BOOKING_BY_USER_ID',
    payload: axios.get(`booking/user-id/${id}`),
  };
};
export const getSeatBooking = (id_schedule, movieId, dateBooking, time) => {
  return {
    type: 'GET_SEAT_BOOKING',
    payload: axios.get(
      `booking/seatBooking?schedule${id_schedule}&movie=${movieId}&date=${dateBooking}&time=${time}`,
    ),
  };
};
export const getDataBookingByBookingId = ticketId => {
  return {
    type: 'GET_BOOKING_BY_BOOKING_ID',
    payload: axios.get(`booking/booking-id/${ticketId}`),
  };
};
