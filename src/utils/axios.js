import axios from "axios";

export const inctance = axios.create(
    {
        baseURL: "http://localhost:3000",
    }
);
