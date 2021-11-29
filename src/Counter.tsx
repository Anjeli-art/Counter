import React from 'react';
import {UniversalButton} from "./UniversalButton";

export type CounterType = {
    inputValueMax: number
    inputValueMin: number
    data: number
    dataString: string
    buttonSet: boolean
    upDate: () => void
    upReset: () => void
    startDis: boolean
}

export const Counter: React.FC<CounterType> = ({inputValueMax, inputValueMin, data, startDis, ...props}) => {

    const conditions = inputValueMax < 0 || inputValueMin < 0 || inputValueMax === inputValueMin || inputValueMin > inputValueMax
    const color = conditions || data === inputValueMax
    const disInc = conditions || inputValueMax === data || startDis ? true : false
    const disRes = conditions || startDis ? true : false
    const counter = props.buttonSet === false ? props.dataString : data

    const counterTwo = {
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
    const buttonBlockTwo = {
        border: "4px solid #c2fdf4",
        borderRadius: "15px",
        padding: "10px 0px 10px 70px",
    }


    return (
        <div style={counterTwo}>
            <div style={valueblock}>{counter}</div>
            <div style={buttonBlockTwo}>
                <UniversalButton title={"inc"}
                                 disabled={disInc}
                                 callBack={props.upDate}/>
                <UniversalButton title={"reset"}
                                 disabled={disRes}
                                 callBack={props.upReset}/>
            </div>
        </div>
    );
}

