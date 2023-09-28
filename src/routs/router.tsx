//libraries
import{Route,Routes} from "react-router-dom"
import Home from "../components/Home"
import Trips from "../components/Trips"
import UserLogin from "../components/UserLogin"
import UserRegistration from "../components/UserRegistration"
import { ROUTES } from "./routsMoudle"
import TripDetail from "../components/TripDetail"
import UpdateTripForm from "../components/UpdateTripForm"
import NewTripFrom from "../components/NewTripFrom"

//function with all routs
export const Router = ()=>{
return <Routes >
    <Route path={ROUTES.HOME} element = {<Home/>}> </Route>
    <Route path={ROUTES.TRIPS} element = {<Trips/>}>  </Route>
    <Route path={ROUTES.REGISTER} element = {<UserRegistration/>}>  </Route>
    <Route path={ROUTES.DETAIL} element = {<TripDetail/>}> </Route>
    <Route path={ROUTES.UPDATE} element = {<UpdateTripForm/>}> </Route>
    <Route path={ROUTES.NEW} element = {<NewTripFrom/>}> </Route>
    <Route path={ROUTES.USERLOGIN} element = {<UserLogin/>}> </Route>
    
</Routes>
}