import { openidSignupRedirect } from '../../api/user';
import { useEffect } from "react"
export default function OauthSignup() {
    async function openidSignupUserRedirect() {
        const response = await openidSignupRedirect(window.location.search);
        console.log('openidRedirect res: ', response);
        if (response.status == 200) {
            window.location.href = '/profile';
        }
        else {
            window.location.href = '/login';
        }
    }
    useEffect(() => {
        openidSignupUserRedirect();
    }, []);
}