import RequestOptions from "../models/api/RequestOptions";
import ApiResponse from "./api_response";
import { sendRequest } from "./api_utils";

export async function getAllUsersApi() {
    let requestOptions: RequestOptions = new RequestOptions(
        {'Content-Type': 'application/json', 'Accept': 'application/json'},
        JSON.stringify({"query": "{getAllUsers{_data{id, email}, _statusCode}}"})
    );
    let response: ApiResponse = await sendRequest(import.meta.env.VITE_SERVER_URL, 'POST', requestOptions);
    console.log(response);
    const data = response.data.getAllUsers;

    return data;
}