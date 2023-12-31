//libraries
import { useEffect, useState } from "react";
import { Vacation } from "./Type";
import { Link, useParams } from "react-router-dom";
import { ROUTES } from "../routs/routsMoudle";
//content for fetch
export function createRequest(method:string,body:undefined|BodyInit = undefined) {
    const token = localStorage.getItem("token");
    if (token) {
        const requestOptions: RequestInit = {
            method: method,
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body:body
        };
        return requestOptions;
    }
}
//main function
export default function TripDetail() {
    //use params
    const { id } = useParams();
    //useState
    const [detail, setDetail] = useState<Vacation | null>(null);
    //get the header
    const request = createRequest("GET")
        //useEffect
        useEffect(() => {
            fetch(`http://localhost:3000/api/trips/${id}`,request)
                .then((json) => json.json())
                .then((data) => {
                    setDetail(data);
                });
        }, []);

    return (
        <>
            <header id="header">
                <Link to={ROUTES.TRIPS}>TRIPS</Link>
            </header>

            <div id="tripCard">
                {
                    <>
                        <h1>{detail?.name}</h1>
                        <h2>{detail?.destination}</h2>
                        <h3>Start Date</h3>
                        <h4>{detail?.startDate}</h4>
                        <h3>End Date</h3>
                        <h4>{detail?.endDate}</h4>
                        <h5>{detail?.description}</h5>
                        <h4>Price</h4>
                        <h5>{detail?.price}</h5>
                        <img src={detail?.image} id="imgCard" />
                        <h4>Activities</h4>
                        <h5>{detail?.activities}</h5>
                    </>
                }
            </div>
            <footer id="footer">Footer</footer>
        </>
    );
}
