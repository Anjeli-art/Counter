import {ActionValuesType} from "./store";

const SET_DATA = "SET_DATA"
const SET_INPUT_VALUE_MIN = "SET_INPUT_VALUE_MIN"
const SET_INPUT_VALUE_MAX = "SET_INPUT_VALUE_MAX"
const SET_DATA_STRING = "SET_DATA_STRING"
const SET_BUTTON_DIS = "SET_BUTTON_DIS"
const SET_START_DIS = "SET_START_DIS"
const SET_SET_DIS = "SET_BUTTON_SET_DIS"

// type InitialStateType = {
//     data: number
//     inputValueMin: number
//     inputValueMax: number
//     dataString: string
//     buttonDis: boolean
//     startDis: boolean
//     setButton: boolean
// }


let initialState = {
    data: 0,
    inputValueMin: 0,
    inputValueMax: 0,
    dataString: "error value!",
    buttonDis: false,
    startDis: true,
    setButton: false
}
type InitialStateType=typeof initialState

export const counterReducer = (state:InitialStateType = initialState, action: ActionValuesType): InitialStateType => {
    switch (action.type) {
        case SET_DATA:
            return {...state, data: action.data}
        case SET_INPUT_VALUE_MIN:
            return {...state, inputValueMin: action.valueMin}
        case SET_INPUT_VALUE_MAX:
            return {...state, inputValueMax: action.valueMax}
        case SET_DATA_STRING:
            return {...state, dataString: action.dataString}
        case SET_BUTTON_DIS:
            return {...state, buttonDis: action.buttonDis}
        case SET_START_DIS:
            return {...state, startDis: action.buttonStart}
        case SET_SET_DIS:
            return {...state, setButton: action.buttonSet}
        default :
            return state
    }
}

export const setDataAC = (data: number) => ({type: SET_DATA, data}) as const
export const setinputValueMinAC = (valueMin: number) => ({type: SET_INPUT_VALUE_MIN, valueMin}) as const
export const setinputValueMaxAC = (valueMax: number) => ({type: SET_INPUT_VALUE_MAX, valueMax}) as const
export const setDataStringAC = (dataString: string) => ({type: SET_DATA_STRING, dataString}) as const
export const setButtonDisAC = (buttonDis: boolean) => ({type: SET_BUTTON_DIS, buttonDis}) as const
export const setStartDisAC = (buttonStart: boolean) => ({type: SET_START_DIS, buttonStart}) as const
export const seSetButtonDisAC = (buttonSet: boolean) => ({type: SET_SET_DIS, buttonSet}) as const