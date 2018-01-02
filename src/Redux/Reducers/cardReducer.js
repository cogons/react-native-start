import {incrementCounter, decrementCounter} from "../Actions/actionTypes";

import {
    toggoleToday,
    updateItem,
    postItem,
    getItem,
    getItems,
    shuffleItems,
    deleteItem
} from '../Actions/types';

import _ from 'underscore'

import moment from 'moment'
import {GetItems} from "../Actions/CardAction";

const fakeCardList = {
    list: ["guide1", "guide2", "guide3"]
}
const fakeCardDetail = {
    "guide1": {
        "uuid": "guide1",
        "title": "右侧打卡",
        "description": "点击详情",
        "history": "333",
        "today": "1",
        "start_date": "2017-12-21",
        "days": 9
    },
    "guide2": {
        "uuid": "guide2",
        "title": "左侧看天数",
        "description": "点击详情",
        "history": "333",
        "today": "5",
        "start_date": "2017-12-10",
        "days": 8
    },
    "guide3": {
        "uuid": "guide3",
        "title": "左侧天数",
        "description": "点击详情",
        "history": "333",
        "today": "4",
        "start_date": "2017-12-21",
        "days": 46
    }
}

const template = {
    "uuid": "db062920-e0a1-11e7-bd7b-97661737f2f5",
    "title": "左侧天数",
    "description": "点击详情",
    "history": "000",
    "today": "5",
    "start_date": moment().format("YYYY-MM-DD"),
    "days": 0
}

const shuffleTime = {
    shuffle_time: "2017-12-20"
}

const initialState = Object.assign({}, fakeCardList, fakeCardDetail, shuffleTime)

const TODAY_STATE_LIST = [5, 4, 1, 5]

function shuffle(item) {

    let history = item.history
    let today = item.today
    let end = moment(moment().format("YYYY-MM-DD"));
    let start = moment(item.start_date)
    let diff = end.diff(start, 'days') - item.history.length + 3

    if (diff !== 0) {
        let new_history = history + (today == "5"
            ? '3'
            : today)
        console.log(today, new_history)
        item.update = true
        for (let i = 0; i < diff - 1; i++) {
            new_history += "3"
        }
        item.history = new_history
        item.today = "5"

    }

    console.log(item)

    return item

}

const cardReducer = (state = initialState, action) => {

    let state_copy = Object.assign({}, state)

    switch (action.type) {

        case toggoleToday:

            let oldToday = parseInt(state_copy[action.uuid].today)

            let newToday = TODAY_STATE_LIST[TODAY_STATE_LIST.indexOf(oldToday) + 1]

            state_copy[action.uuid].today = newToday + ""

            return state_copy;

        case updateItem:
            return {
                ...state,
                [action.uuid]: Object.assign(state[action.uuid], action.content)
            };

        case postItem:

            return {
                ...state,
                [action.uuid]: Object.assign(template, action.content, {
                    uuid: action.uuid,
                    start_date: moment().format("YYYY-MM-DD")
                }),
                list: state
                    .list
                    .concat(action.uuid)
            };

        case getItems:
            console.log("from getItems", state);
            return {
                ...state
            };
        case deleteItem:

            state_copy.list = _.without(state_copy.list, action.uuid);
            state_copy[action.uuid].state = "delete";

            return state_copy;

        case shuffleItems:
            console.log(state);
            state_copy = Object.assign({}, state)
            let today_date = moment().format("YYYY-MM-DD")

            let today_date_debug = moment().format("YYYY-MM-DD");
            if (state_copy.shuffle_time !== today_date_debug) {

                console.log("need shuffle")
                state_copy
                    .list
                    .forEach((uuid) => {
                        state_copy[uuid] = shuffle(state_copy[uuid])
                    })
            }

            state_copy.shuffle_time = today_date_debug
            return state_copy

        default:
            return state;
    }
};

export default cardReducer;