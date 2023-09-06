//libraries
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routs/router";
//main function
function App() {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
}

export default App;
