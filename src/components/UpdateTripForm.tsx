import { useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { ROUTES } from "../routs/routsMoudle";

export default function UpdateTripForm() {
    // Use state 
    const [name, setName] = useState("");
    const [destination, setDestination] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [activities, setActivities] = useState("");
    //use params
    const {id} = useParams()

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
        const token = localStorage.getItem("token")
        if(!token) return null
        fetch(`http://localhost:3000/api/trips/${id}`,{
            method: "PUT",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(trip),
        });
        console.log('success');
        
    };

    return (
        <>
         <header id="header"><Link to={ROUTES.TRIPS}>TRIPS</Link></header>

        <div id="newTrip">
            <h1>UPDATE TRIP</h1>
            <form id="form" onSubmit={handleSubmit}>
                <label>NAME</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>DESTINATION</label>
                <input
                    type="text"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                />
                <label>START DATE</label>
                <input
                    type="text"
                    required
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
                <label>END DATE</label>
                <input
                    type="text"
                    required
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
                <label>DESCRIPTION</label>
                <input
                    type="text"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label>PRICE</label>
                <input
                    type="number"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label>IMAGE</label>
                <input
                    type="text"
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <label>ACTIVITIES (comma-separated)</label>
                <input
                    type="text"
                    required
                    value={activities}
                    onChange={(e) => setActivities(e.target.value)}
                />
                <br />
                <button>Add Trip</button>
            </form>
        </div>
        </>
        
        
    );
}
