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
