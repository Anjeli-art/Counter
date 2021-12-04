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
        padding: "20px",
        width: "390px",
        backgroundColor: "#282c34",
        border: "4px solid #c2fdf4",
        borderRadius: "15px",
        minHeight: "300px"
    }
    const valueblock = {
        "text-align": "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "4px solid #c2fdf4",
        minHeight: "150px",
        borderRadius: "15px",
        marginBottom: "10px",
        lineHeight: "1.2",
        color: color ? "#7f0703" : "#c2fdf4",
        fontWeight: 800,
        fontSize: typeof counter === "number" ? "500%" : "300%",
    }
    const buttonBlockTwo = {
        border: "4px solid #c2fdf4",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        padding: "10px"
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

