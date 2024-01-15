import fetch from 'node-fetch';
export async function httpRequest(request:HttpRequest): Promise<HttpResponse> {
    let url = request.url;
    let method = request.method;
    let headers = request.headers;
    let body = request.body;
    
    let res = await fetch(url, {
        method: method,
        headers: headers,
        body: body
    });
    
    let data = await res.json();
    let statusCode = res.status;
    return {
        statusCode: statusCode,
        data: data
    };
    // return data;
}

