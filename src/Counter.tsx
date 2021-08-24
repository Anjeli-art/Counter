import React from 'react';
import {UniversalButton} from "./UniversalButton";

export type CounterType = {
    dataMax: number
    dataMin: number
    data: number
    dataString: string
    set: boolean
    upDate: () => void
    upReset: () => void
    startDis: boolean
}

export function Counter(props: CounterType) {

    let color = props.dataMax < 0 || props.dataMin < 0 || props.dataMax === props.dataMin || props.dataMin > props.dataMax || props.data === props.dataMax
    let disInc = props.dataMax < 0 || props.dataMin < 0 || props.dataMax === props.dataMin || props.dataMin > props.dataMax || props.dataMax === props.data || props.startDis ? true : false
    let disRes = props.dataMax < 0 || props.dataMin < 0 || props.dataMax === props.dataMin || props.dataMin > props.dataMax || props.startDis ? true : false
    let counter = props.set === false ? props.dataString : props.data

    const counter2 = {
        width: "350px",
        backgroundColor: "#282c34",
        padding: "20px",
        margin: "100px 100px 350px 100px",
        border: "4px solid #c2fdf4",
        borderRadius: "15px",
    }
    const valueblock = {
        "text-align": "center",
        border: "4px solid #c2fdf4",
        height: "130px",
        borderRadius: "15px",
        marginBottom: "10px",
        color: color ? "#7f0703" : "#c2fdf4",
        fontWeight: 800,
        fontSize: typeof counter === "number" ? "500%" : "300%",
    }
    const buttonBlock2 = {
        border: "4px solid #c2fdf4",
        borderRadius: "15px",
        padding: "10px 0px 10px 70px",
    }


    return (
        <div style={counter2}>
            <div style={valueblock}>{counter}</div>
            <div style={buttonBlock2}>
                <UniversalButton title={"inc"}
                                disabled={disInc}
                                Callback={props.upDate}/>
                <UniversalButton title={"reset"}
                                disabled={disRes}
                                Callback={props.upReset}/>
            </div>
        </div>
    );
}

