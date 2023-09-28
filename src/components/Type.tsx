interface Vacation {
    _id:string
    id: string;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    description: string;
    price: number;
    image: string;
    activities: string[];
}

interface User{
    email:string;
    password:string
}

interface response
{
  "message": string,
  "user": {
    "id": string,
    "email": string
  },
  "authToken": string
}



export type{Vacation,User,response}