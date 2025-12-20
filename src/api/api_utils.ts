import RequestOptions from "../models/api/RequestOptions";

export async function sendRequest(url: string, method: string, options: RequestOptions) {
    if (method == 'POST') {
        const response = await fetch(url, { method: method, headers: options.headers, body: options.body, credentials: 'include' });
        if (response.status == 401 || response.status == 500) {
            return {
                status: response.status
            }
        }
        return await response.json();
    }
}