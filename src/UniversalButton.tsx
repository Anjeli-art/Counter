import React from "react";

export type UniversalButonType = {
    disabled: boolean
    title: string
    Callback: () => void
}


export function UniversalButton(props: UniversalButonType) {

    const buttonRes = {
        backgroundColor: props.disabled ? "#57667b" : "#c2fdf4",
        borderRadius: "10px",
        padding: "10px",
        margin: "5px",
        fontWeight: 800,
        fontSize: "200%",
        color: "#282c34",
        border: "0",
    }
    const buttonInc = {
        backgroundColor: props.disabled ? "#57667b" : "#c2fdf4",
        borderRadius: "10px",
        padding: "10px",
        margin: "5px",
        fontWeight: 800,
        fontSize: "200%",
        color: "#282c34",
        border: "0",
    }
    const buttonSet = {
        backgroundColor: props.disabled ? "#57667b" : "#c2fdf4",
        borderRadius: "10px",
        padding: "10px",
        margin: "5px",
        fontWeight: 800,
        fontSize: "200%",
        color: "#282c34",
        border: "0",
    }

    return (
        <button disabled={props.disabled}
                onClick={props.Callback}
                style={props.title === "set" ? buttonSet : props.title === "reset" ? buttonRes : buttonInc}>{props.title}</button>
    )

}