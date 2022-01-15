import {combineReducers} from 'redux';

import auth from './auth';
import booking from './booking';
import movie from './movie';
import schedule from './schedule';
import user from './user';

export default combineReducers({
  auth,
  booking,
  movie,
  schedule,
  user,
});
