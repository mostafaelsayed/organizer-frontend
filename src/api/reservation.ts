import RequestOptions from "../models/api/RequestOptions";
import ApiResponse from "./api_response";
import { sendRequest } from "./api_utils";

export async function createReservation(name: string, description: string) {
    let requestOptions: RequestOptions = new RequestOptions(
        {'Content-Type': 'application/json', 'Accept': 'application/json'},
        JSON.stringify({"query": `{createReservation(name: \"${name}\", description: \"${description}\"){_data{id, name, description, createdAt, updatedAt, reservationTime}, _statusCode}}`})
    );
    let response: ApiResponse = await sendRequest(import.meta.env.VITE_SERVER_URL, 'POST', requestOptions);
    console.log(response);
    const data = response.data.loginUser;
    
    return data;
}