class RequestOptions {
    body: any;
    headers: any;

    constructor(headers: any, body: any) {
        this.headers = headers;
        this.body = body;
    }

    public getBody(): any {
        return this.body;
    }

    public setBody(body: any) {
        this.body = body;
    }

    public getHeaders(): any {
        return this.headers;
    }

    public setHeaders(headers: any) {
        this.headers = headers;
    }
}

export default RequestOptions