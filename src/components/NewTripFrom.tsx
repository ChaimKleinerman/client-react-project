import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../routs/routsMoudle";
import { createRequest } from "./TripDetail";

export default function NewTripForm() {
    // Use state
    const [name, setName] = useState("");
    const [destination, setDestination] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [activities, setActivities] = useState("");
    //use state for process
    const [process, setProcess] = useState<string>();
    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trip = {
            name,
            destination,
            startDate,
            endDate,
            description,
            price,
            image,
            activities: activities.split(", "),
        };
        const request = createRequest("POST", JSON.stringify(trip));

        fetch("http://localhost:3000/api/trips", request)
            .then((response) => {
                console.log(response);
                return response.text();
                
                
            })
            .then((obj) => {
                console.log(obj, "this is text");
                setProcess("trip added");
            });
    };

    return (
        <>
            <header id="header">
                <Link to={ROUTES.TRIPS}>TRIPS</Link>
            </header>
            ח
            <div id="newTrip">
                <h1>Create New Trip</h1>
                <form id="form" onSubmit={handleSubmit}>
                    <label>NAME</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label>DESTINATION</label>
                    <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                    <label>START DATE</label>
                    <input
                        type="text"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <label>END DATE</label>
                    <input
                        type="text"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                    <label>DESCRIPTION</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <label>PRICE</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <label>IMAGE</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <label>ACTIVITIES (comma-separated)</label>
                    <input
                        type="text"
                        value={activities}
                        onChange={(e) => setActivities(e.target.value)}
                    />
                    <br />
                    <button
                        onClick={() => {
                            setProcess("adding...");
                        }}
                    >
                        Add Trip
                    </button>
                </form>
            </div>
            <div id="process"> {process}</div>
        </>
    );
}
