import RequestOptions from "../models/api/RequestOptions";

function isOauthUrl(url: string) {
  const oauthUrls = ['/googlesignin', '/googlesignup', '/openidlogin', '/openidsignup'];
  for (const x of oauthUrls) {
    if (url.includes(x)) {
      return true;
    }
  }

  return false;
}

export async function sendRequest(url: string, method: string, options: RequestOptions | undefined) {
    if (method == 'POST' && !isOauthUrl(url)) {
        const response = await fetch(url, { method: method, headers: options?.headers, body: options?.body, credentials: 'include' });
        if (response.status == 401 || response.status == 500) {
            return {
                status: response.status
            }
        }
        return await response.json();
    }
    else {
        const response = await fetch(url, { method: method, headers: options?.headers, credentials: 'include' });
        const data = await response.json();
        if (data.redirect) {
            window.location.href = data.redirect;
            return;
        }
        return response;
    }
}