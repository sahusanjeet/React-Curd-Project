import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from "react-toastify";
import Wrapper from "./Wrapper";
import "react-toastify/dist/ReactToastify.css";
import "./Style.css";

createRoot(document.getElementById("root")).render(
    <Wrapper>
        <App />
        <ToastContainer position="top-center" />
    </Wrapper>
    

);


