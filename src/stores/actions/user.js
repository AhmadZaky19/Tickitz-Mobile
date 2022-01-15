import axios from '../../utils/axios';

export const getDataUser = id => {
  return {
    type: 'GET_DATA_USER',
    payload: axios.get(`user/${id}`),
  };
};
export const updateDataUser = data => {
  return {
    type: 'UPDATE_DATA_USER',
    payload: axios.patch('user/', data),
  };
};
export const updatePassword = data => {
  return {
    type: 'UPDATE_PASSWORD',
    payload: axios.patch('user/update-password', data),
  };
};
export const updateUserImage = data => {
  return {
    type: 'UPDATE_USER_IMAGE',
    payload: axios.patch('user/image', data),
  };
};
