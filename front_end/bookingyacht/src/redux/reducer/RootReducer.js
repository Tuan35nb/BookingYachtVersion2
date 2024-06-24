import { combineReducers } from 'redux';
import userReducer from './UserReducer';
import { YachtListReducer } from './YachtListReducer';
import { YachtReducer } from './YachtReducer';
import { YachtImagesReducer } from './YachtImagesReducer';
import { YachtServiceReducer } from './YachtServiceReducer';
import { ServiceByYachtReducer } from './ServiceByYachtReducer';
import { ScheduleReducer } from './ScheduleReducer';

const RootReducer = combineReducers({
    account: userReducer,
    YachtListReducer,
    YachtReducer,
    YachtImagesReducer,
    YachtServiceReducer,
    ServiceByYachtReducer,
    ScheduleReducer
});

export default RootReducer;