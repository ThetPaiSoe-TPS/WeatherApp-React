import axios from "axios";

export const api= axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather"
})
export const appid= "963f057264bc184bb35d4e2daa180b5e";