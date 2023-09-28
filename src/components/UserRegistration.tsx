//modules
import { useForm} from "react-hook-form";
import { User } from "./Type";
import axios from "axios";
import { Link } from "react-router-dom";
import { ROUTES } from "../routs/routsMoudle";
//main function
export default function UserRegistration() {
    //use form
    const { register, handleSubmit } = useForm<User>();
    //header
    const headers = {
        "Content-Type": "application/json",
    };
    //axios
  async  function onSubmit(data: User) {
      const respond = await  axios.post("http://localhost:3000/api/register", data, { headers });
        console.log(respond);
        
    }
    return (
        <>
        <header id="header">
                <Link to={ROUTES.HOME}>HOME</Link>
                
            </header>
            <br />
            <br />
            
            <div id="newTrip">
            <h1> TRIPS WEB REGISTRATION</h1>
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
