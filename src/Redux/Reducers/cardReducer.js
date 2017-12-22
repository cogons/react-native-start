import {incrementCounter, decrementCounter} from "../Actions/actionTypes";

import * as TYPES from '../Actions/types';

const fakeCardList = {
    list: ["db07d6d0-e0a1-11e7-bd7b-97661737f2f5", "db06c560-e0a1-11e7-bd7b-97661737f2f5"]
}
const fakeCardDetail = {
    "db07d6d0-e0a1-11e7-bd7b-97661737f2f5": {
        "uuid": "db07d6d0-e0a1-11e7-bd7b-97661737f2f5",
        "content": "点击详情",
        "history": [
            "3", "3", "3"
        ],
        "today": "0",
        "start_date": "2017-12-13",
        "days": 9
    },
    "db06c560-e0a1-11e7-bd7b-97661737f2f5": {
        "uuid": "db06c560-e0a1-11e7-bd7b-97661737f2f5",
        "content": "右侧进行打卡",
        "history": [
            "3", "3", "3"
        ],
        "today": "0",
        "start_date": "2017-12-13",
        "days": 8
    },
    "db062920-e0a1-11e7-bd7b-97661737f2f5": {
        "uuid": "db062920-e0a1-11e7-bd7b-97661737f2f5",
        "content": "左侧显示天数",
        "history": [
            "3", "3", "3"
        ],
        "today": "0",
        "start_date": "2017-11-05",
        "days": 46
    }
}

const initialState = Object.assign({}, fakeCardList, fakeCardDetail)

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.TOGGOLE_TODAY:

            let state_copy = Object.assign({}, state)

            let oldToday = state_copy[action.uuid].today

            let newToday = parseInt(oldToday) + 1

            state_copy[action.uuid].today = newToday < 4
                ? newToday
                : 0

            return state_copy;

        case decrementCounter:
            return {
                ...state,
                counter: state.counter - 1
            };

        case "LOGOUT":
            return {
                ...initialState
            };

        default:
            return state;
    }
};

export default cardReducer;