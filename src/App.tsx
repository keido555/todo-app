import React from "react";
import { useState } from "react";
import "./style.css";

import {InputTodo} from "./components/inputTodo";
import { IncompleteTodos } from "./components/incompleteTodos";
import { CompleteTodos } from "./components/completeTodos";

// type NotesProps = {
//     notes: {
//         event: any,
//         newTodos: string,
//         index: any,
//         todo: string,
//     }[]
// }

const App = () => {
    const [todoText, setTodoText] = useState('')
    const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
    const [completeTodos, setCompleteTodos] = useState<string[]>([]);

    const onChangeTodoText = (event:any) => setTodoText(event.target.value);
    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    };
    const onClickDelete = (index:any) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setIncompleteTodos(newTodos);
    };
    const onClickComplete = (index:any) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);

        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    };
    const onClickBack = (index:any) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);

        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    }

    return (
        <>
            <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} disabled={incompleteTodos.length >= 5} />
            {incompleteTodos.length >= 5 && (
                <p style={{color: 'red'}}>登録できる数は5個まで</p>
            )}
            <IncompleteTodos todos={incompleteTodos} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
            <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
        </>
    )
};

export default App;