//libraries
import { Link } from "react-router-dom";
import { ROUTES } from "../routs/routsMoudle";
import { useEffect, useState } from "react";
import { Vacation } from "./Type";
import UserLogin from "./UserLogin";

//main function
export default function Trips() {
    //useState
    const [trips, setTrips] = useState<Vacation[]>([]);

    //function delete
    function Delete(id: string) {
        //get token
        const token = localStorage.getItem("token");
        if (!token) return null;
        
        fetch(`http://localhost:3000/api/trips/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: token,
            },
        })
            .then(() => {
                location.reload();
            })
            .catch((error) => {
                console.error("Error deleting item:", error);
            });
    }

    //useEffect for put
    useEffect(() => {
        fetch("http://localhost:3000/api/trips")
            .then((json) => json.json())
            .then((data) => {
                setTrips(data);
            });
    }, []);
    const token = localStorage.getItem("token")
    if (token)
    return (
        <>
            <header id="header">
                <Link to={ROUTES.HOME}>HOME</Link>
                <Link to={ROUTES.NEW}>NEW TRIP</Link>
            </header>
            <div id="trips">
                {trips.map((trip) => (
                    <div id="tripCard">
                        <Link to={`/detail/${trip.id}`}>
                            <h1>{trip.name}</h1>
                            <h2>{trip.destination}</h2>
                            <h3>Start Date</h3>
                            <h4>{trip.startDate}</h4>
                            <h3>End Date</h3>
                            <h4>{trip.endDate}</h4>
                            <img src={trip.image} id="imgCard" />
                        </Link>

                        {localStorage.getItem("token") ? (
                            <>
                                <button onClick={() => Delete(trip.id)}>
                                    DELETE
                                </button>
                                <br />
                                <Link to={`/update/${trip.id}`}>
                                    <button id="updateButton">UPDATE</button>
                                </Link>
                            </>
                        ) : (
                            <>
                                <button >
                                    DELETE
                                </button>
                                <br />
                              
                                    <button id="updateButton">UPDATE</button>
                                
                            </>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
    else {
        return <UserLogin />;
    }
}
