//modules
import { useForm} from "react-hook-form";
import { User } from "./Type";
import axios from "axios";
import { Link } from "react-router-dom";
import { ROUTES } from "../routs/routsMoudle";
//main function
export default function UserLogin() {
    //use form
    const { register, handleSubmit } = useForm<User>();
    //header
    const headers = {
        Authorization: "test-token",
        "Content-Type": "application/json",
    };
    //axios
    function onSubmit(data: User) {
        axios.post("http://localhost:3000/api/login", data, { headers })
        .then(response =>{
            console.log(response.data);
            
            const token = response.data;
            localStorage.setItem("token",token)
        } )
        
    }
    return (
        <>
        <header id="header">
                <Link to={ROUTES.HOME}>HOME</Link>
                
            </header>
            <br />
            <br />
            
            <div id="newTrip">
            <h1>LOG IN</h1>
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
            <label>EMAIL</label>
            <input {...register("email")} />
            <label>PASSWORD</label>
            <input {...register("password")} />
            <button>SUBMIT</button>
        </form>
        </div>
        </>
    );
}

