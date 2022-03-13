import React from "react";

const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    borderRadius: "8px",
    padding: "8px",
    margin: "8px",
};

export const InputTodo = (props:any) => {
    const { todoText, onChange, onClick, disabled } = props;

    return (
        <div style={style} className="input-area">
            <input disabled={disabled} type="text" placeholder="TODOを入力" value={todoText} onChange={onChange}/>
            <button onClick={onClick}>追加</button>
        </div>
    )
}