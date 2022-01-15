import axios from '../../utils/axios';

export const getSchedule = (location, movieId, sort, order, page, limit) => {
  return {
    type: 'GET_SCHEDULE',
    payload: axios.get(
      `schedule/?location=${location}&movieId=${movieId}&sort=${sort}&order=${order}&page=${page}&limit=${limit}`,
    ),
  };
};
