import { createStore, combineReducers } from "redux";
import {
    persistCombineReducers,
    persistStore,
    persistReducer
} from "redux-persist";
import storage from "redux-persist/es/storage";

import counterReducer from "./src/Redux/Reducers/counterReducer";
import cardReducer from "./src/Redux/Reducers/cardReducer";
import NavigationReducer from "./src/Redux/Reducers/navigationReducer";
import loginReducer from "./src/Redux/Reducers/loginReducer";

// config to not persist the *counterString* of the CounterReducer's slice of the global state.
const config = {
    key: "root",
    storage,
    blacklist: ["counterString"]
};

const config1 = {
    key: "primary",
    storage
};

// Object of all the reducers for redux-persist
const reducer = {
    counterReducer,
    cardReducer,
    NavigationReducer,
    loginReducer
};

// This will persist all the reducers, but I don't want to persist navigation state, so instead will use persistReducer.
// const rootReducer = persistCombineReducers(config, reducer)

// We are only persisting the counterReducer and loginRducer
const CounterReducer = persistReducer(config, counterReducer);
const LoginReducer = persistReducer(config1, loginReducer);
const CardReducer = persistReducer(config1, cardReducer);
// combineReducer applied on persisted(counterReducer) and NavigationReducer
const rootReducer = combineReducers({
    CounterReducer,
    NavigationReducer,
    LoginReducer,
    CardReducer
});

function configureStore() {
    let store = createStore(rootReducer);
    let persistor = persistStore(store);
    return { persistor, store };
}

export default configureStore;