import { openidLoginRedirect } from '../../api/user';
import { useEffect } from "react"
export default function OauthLogin() {
    async function openidLoginUserRedirect() {
        const response = await openidLoginRedirect(window.location.search);
        console.log('openidRedirect res: ', response);
        if (response.status == 200) {
            window.location.href = '/profile';
        }
        else {
            window.location.href = '/login';
        }
    }
    useEffect(() => {
        openidLoginUserRedirect();
    }, []);
}