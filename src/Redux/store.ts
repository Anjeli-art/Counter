import {combineReducers, createStore, Store} from "redux";
import {
    counterReducer, seSetButtonDisAC,
    setButtonDisAC,
    setDataAC,
    setDataStringAC,
    setinputValueMaxAC,
    setinputValueMinAC, setStartDisAC
} from "./counter-reducer";



export type ActionValuesType=
    ReturnType<typeof setDataAC>|
    ReturnType<typeof setinputValueMinAC>|
    ReturnType<typeof setinputValueMaxAC>|
    ReturnType<typeof setDataStringAC>|
    ReturnType<typeof setButtonDisAC>|
    ReturnType<typeof setStartDisAC>|
    ReturnType<typeof seSetButtonDisAC>


let RootReducer=combineReducers({
    counter:counterReducer
})

export type RootStateType=ReturnType<typeof RootReducer>

export const store:Store<RootStateType,ActionValuesType>=createStore(RootReducer)