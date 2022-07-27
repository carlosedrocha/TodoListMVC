import {useState, useContext} from "react";

import { TodosContext } from "../../contexts/todos.js";
import {enterCode} from "../../Keycodes/keycodes.js";

const Header = () => {
    const [text, setText] = useState("");
    const [, dispatch] = useContext(TodosContext);

    const changeText = (event) => {
        setText(event.target.value);
    };

    const keydownText = (event) => {
        //enterCode = 13 = enter keycode
        const isEnter = event.keyCode === enterCode;
        const newText = text.trim();
        const isTextPresent = newText.length > 0;

        if (isEnter && isTextPresent) {
            console.log("keydownText", newText);
            dispatch({ type: "addTask", payload: newText });
            setText("");
        }
    };
    return (
        <header className="header">
            <h1>todos</h1>
            <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={text}
            onChange={changeText}
            onKeyDown={keydownText}
            />
        </header>
    );
};

export default Header;