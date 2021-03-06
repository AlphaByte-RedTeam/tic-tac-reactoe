import React from "react";

function Square(props) {
    return (
        <button className={`${props.value && "square-filled"} square`} onClick={() => props.onClic()}>
            {props.value}
        </button>
    );
}

export default Square;