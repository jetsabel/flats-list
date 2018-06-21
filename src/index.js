import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import "./css/style.css";
import Fish from './components/Fish'

render(<Router />, document.querySelector("#main"));
