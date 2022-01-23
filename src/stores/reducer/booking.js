const initialState = {
  isError: false,
  isLoading: false,
  msg: '',
  data: [],
  seat: [],
};

const booking = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_BOOKING_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: '',
      };
    }
    case 'POST_BOOKING_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    }
    case 'POST_BOOKING_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
      };
    }
    case 'GET_BOOKING_BY_USER_ID_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: '',
      };
    }
    case 'GET_BOOKING_BY_USER_ID_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }
    case 'GET_BOOKING_BY_USER_ID_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
      };
    }
    case 'GET_SEAT_BOOKING_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: '',
      };
    }
    case 'GET_SEAT_BOOKING_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        seat: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    }
    case 'GET_SEAT_BOOKING_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        msg: action.payload.response.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default booking;
