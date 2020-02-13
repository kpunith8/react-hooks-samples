import React from "react";
import ReactDOM from "react-dom";
import "typeface-roboto";
import "./index.css";
import MemoHookEx from "./components/memo-hook-ex";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import GameOfLife from "./components/game-of-life/game-of-life";
import SuspenseEx from "./components/concurrent/suspense-ex";

// ReactDOM.render(<GameOfLife />, document.getElementById('root'));
ReactDOM.createRoot(document.getElementById("root")).render(<SuspenseEx />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
