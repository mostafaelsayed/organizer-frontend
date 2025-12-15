import RequestOptions from "../models/api/RequestOptions";

export async function sendRequest(url: string, method: string, options: RequestOptions) {
    if (method == 'POST') {
        const response = await fetch(url, { method: method, headers: options.headers, body: options.body, credentials: 'include' });
        return await response.json();
    }
}