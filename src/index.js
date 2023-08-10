import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { models } from "./models.js";
import TerminatorList from "./components/terminator-list/terminator-list.component";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TerminatorList models={models} />);
