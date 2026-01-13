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

export async function login(email: string, password: string) {
    let requestOptions: RequestOptions = new RequestOptions(
        {'Content-Type': 'application/json', 'Accept': 'application/json'},
        JSON.stringify({"query": `{loginUser(email: \"${email}\", password: \"${password}\"){_data{id, jwt, firstName, updatedAt, reservations{id, name, createdAt, updatedAt, reservationTime}}, _statusCode}}`})
    );
    let response: ApiResponse = await sendRequest(import.meta.env.VITE_SERVER_URL, 'POST', requestOptions);
    console.log(response);
    const data = response.data.loginUser;
    
    return data;
}

export async function signup(email: string, firstName: string, lastName: string, phoneNumber: string, password: string) {
    let requestOptions: RequestOptions = new RequestOptions(
        {'Content-Type': 'application/json', 'Accept': 'application/json'},
        JSON.stringify({"query": `{registerUser(email: \"${email}\", firstName: \"${firstName}\", lastName: \"${lastName}\", phoneNumber: \"${phoneNumber}\", password: \"${password}\"){_data{id, jwt, firstName, updatedAt, reservations{id, name, createdAt, updatedAt, reservationTime}}, _statusCode}}`})
    );
    let response: ApiResponse = await sendRequest(import.meta.env.VITE_SERVER_URL, 'POST', requestOptions);
    console.log(response);
    const data = response.data.loginUser;
    
    return data;
}

export async function deleteUser(email: string) {
    let requestOptions: RequestOptions = new RequestOptions(
        {'Content-Type': 'application/json', 'Accept': 'application/json'},
        JSON.stringify({"query": `{deleteUser(email: \"${email}\"){_data{id, jwt, firstName, updatedAt, reservations{id, name, createdAt, updatedAt, reservationTime}}, _statusCode}}`})
    );
    let response: ApiResponse = await sendRequest(import.meta.env.VITE_SERVER_URL, 'POST', requestOptions);
    console.log(response);
    const data = response.data.loginUser;
    
    return data;
}

export async function getUserReservations() {
    let requestOptions: RequestOptions = new RequestOptions(
        {'Content-Type': 'application/json', 'Accept': 'application/json'},
        JSON.stringify({"query": `{getUserReservations{_data{user{id, email, firstName}, reservations{id, name, description, createdAt, updatedAt, reservationTime}}, _statusCode}}`})
    );
    let response: ApiResponse = await sendRequest(import.meta.env.VITE_SERVER_URL, 'POST', requestOptions);
    console.log(response);
    if (response.status == 401 || response.status == 500) {
        return response;
    }
    const data = response.data.getUserReservations._data;

    return data;
}

export async function openidLogin() {
    let response: ApiResponse = await sendRequest(import.meta.env.VITE_SERVER_URL + '/openidlogin', 'POST', undefined);
    console.log(response);
    return response;
}

export async function openidSignup() {
    let response: ApiResponse = await sendRequest(import.meta.env.VITE_SERVER_URL + '/openidsignup', 'POST', undefined);
    console.log(response);
    return response;
}

export async function openidSignupRedirect(params: URLSearchParams) {
    let response: ApiResponse = await sendRequest(import.meta.env.VITE_SERVER_URL + '/googlesignup' + params, 'POST', undefined);
    console.log(response);
    return response;
}


export async function openidLoginRedirect(params: URLSearchParams) {
    let response: ApiResponse = await sendRequest(import.meta.env.VITE_SERVER_URL + '/googlesignin' + params, 'POST', undefined);
    console.log(response);
    return response;
}