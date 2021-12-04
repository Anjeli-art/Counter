import React, {ChangeEvent} from 'react';
import {Starter} from "./Starter";
import {Counter} from "./Counter";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./Redux/store";
import {
    seSetButtonDisAC,
    setButtonDisAC,
    setDataAC,
    setDataStringAC,
    setinputValueMaxAC,
    setinputValueMinAC, setStartDisAC
} from "./Redux/counter-reducer";


export const App: React.FC = () => {

//     let [data, setData] = useState(0)
//     const [inputValueMin, setinputValueMin] = useState(0)
//     const [inputValueMax, setinputValueMax] = useState(0)
//     const [dataString, setDataString] = useState("error value!")
//     const [buttonDis, setbuttonDis] = useState(false)
//     const [startDis, setStartDis] = useState(true)
// const [set, setSet] = useState(false)

    let data = useSelector<RootStateType, number>(state => state.counter.data)
    const inputValueMin = useSelector<RootStateType, number>(state => state.counter.inputValueMin)
    const inputValueMax = useSelector<RootStateType, number>(state => state.counter.inputValueMax)
    const dataString = useSelector<RootStateType, string>(state => state.counter.dataString)
    const buttonDis = useSelector<RootStateType, boolean>(state => state.counter.buttonDis)
    const startDis = useSelector<RootStateType, boolean>(state => state.counter.startDis)
    const buttonSet = useSelector<RootStateType, boolean>(state => state.counter.setButton)

    const dispatch = useDispatch()

    const onChangeValueMin = (e: ChangeEvent<HTMLInputElement>) => {
        const minValue = +e.currentTarget.value
        dispatch(setinputValueMinAC(minValue))
        dispatch(setButtonDisAC(false))

        if (inputValueMax <= 0 || minValue < 0 || minValue >= inputValueMax) {
            dispatch(setDataStringAC("error value!"))
        } else {
            dispatch(setDataStringAC("enter value and press set"))
        }
    }

    const onChangeValueMax = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = +e.currentTarget.value
        dispatch(setinputValueMaxAC(maxValue))
        dispatch(setButtonDisAC(false))

        if (maxValue <= 0 || inputValueMin < 0 || inputValueMin >= maxValue) {
            dispatch(setDataStringAC("error value!"))
        } else {
            dispatch(setDataStringAC("enter value and press set"))
        }
    }

    const upDate = () => {
        if (data < inputValueMax)
            dispatch(setDataAC(data + 1))
    }
    const upReset = () => {
        dispatch(setDataAC(0))
        dispatch(seSetButtonDisAC(false))
        dispatch(setStartDisAC(true))
    }
    const onSet = () => {
        dispatch(setDataAC(inputValueMin))
        dispatch(setButtonDisAC(!buttonDis))
        dispatch(seSetButtonDisAC(true))
        dispatch(setStartDisAC(false))
    }

    // useEffect(() => {
    //     let str = localStorage.getItem("inputValueMin")
    //     if (str) {
    //         let num = JSON.parse(str)
    //         setinputValueMin(num)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem("inputValueMin", JSON.stringify(inputValueMin))
    // }, [inputValueMin])
    //
    //
    // useEffect(() => {
    //     let str = localStorage.getItem("inputValueMax")
    //     if (str) {
    //         let num = JSON.parse(str)
    //         setinputValueMax(num)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem("inputValueMax", JSON.stringify(inputValueMax))
    // }, [inputValueMax])
    // useEffect(() => {
    //     let str = localStorage.getItem("set")
    //     if (str) {
    //         let num = JSON.parse(str)
    //         setSet(num)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem("set", JSON.stringify(set))
    // }, [set])
    // useEffect(() => {
    //     let str = localStorage.getItem("data")
    //     if (str) {
    //         let num = JSON.parse(str)
    //         setData(num)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem("data", JSON.stringify(data))
    // }, [data])
    // useEffect(() => {
    //     let str = localStorage.getItem("dataString")
    //     if (str) {
    //         let num = JSON.parse(str)
    //         setDataString(num)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem("dataString", JSON.stringify(dataString))
    // }, [dataString])
    // useEffect(() => {
    //     let str = localStorage.getItem("buttonDis")
    //     if (str) {
    //         let num = JSON.parse(str)
    //         setbuttonDis(num)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem("buttonDis", JSON.stringify(buttonDis))
    // }, [buttonDis])
    // useEffect(() => {
    //     let str = localStorage.getItem("startDis")
    //     if (str) {
    //         let num = JSON.parse(str)
    //         setStartDis(num)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem("startDis", JSON.stringify(startDis))
    // }, [startDis])


    const block = {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    }

    return (
        <div style={block} className={"block"}>
            <Starter buttonDis={buttonDis}
                     inputValueMax={inputValueMax}
                     inputValueMin={inputValueMin}
                     onSet={onSet}
                     onChangeValueMax={onChangeValueMax}
                     onChangeValueMin={onChangeValueMin}
            />
            <Counter inputValueMax={inputValueMax}
                     inputValueMin={inputValueMin}
                     data={data}
                     dataString={dataString}
                     buttonSet={buttonSet}
                     upDate={upDate}
                     upReset={upReset}
                     startDis={startDis}/>
        </div>
    );
}


