import React from "react";
import {createRoot} from "react-dom/client"
import HelloReact from "./components/HelloReact";

const root = createRoot(document.getElementById('root'));

root.render(<HelloReact/>);