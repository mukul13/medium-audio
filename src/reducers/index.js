import {combineReducers} from 'redux';

import story from './story';

import play from './play';

export default combineReducers({
  story,
  play
});