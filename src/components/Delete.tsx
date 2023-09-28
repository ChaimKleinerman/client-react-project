//modules
import { createRequest } from "./TripDetail";
//function delete

export function Delete(id: string) {
    const request = createRequest("DELETE");

    fetch(`http://localhost:3000/api/trips/${id}`, request)
        .then((res) => {
            console.log(res);
            location.reload();
        })
        .catch((error) => {
            console.error("Error deleting item:", error);
        });
}
