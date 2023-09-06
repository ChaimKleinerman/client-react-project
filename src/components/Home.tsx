//libraries
import { Link } from "react-router-dom";
import { ROUTES } from "../routs/routsMoudle";


//useState

//main function
export default function Home() {
    
        return (
            <div id="homeButtons">
                <h1>ORDER TRIP</h1>
                <Link to={ROUTES.TRIPS}>TRIPS</Link>
                <Link to={ROUTES.REGISTER}>REGISTER</Link>
                <Link to={ROUTES.USERLOGIN}>LOG IN</Link>
                <button
                    onClick={() => {
                        localStorage.setItem("token", "");
                       
                    }}
                    id="logout"
                >
                    LOG OUT
                </button>
            </div>
        );
    
}
