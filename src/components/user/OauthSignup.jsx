import { openidSignupRedirect } from '../../api/user';
import { useEffect } from "react"
export default function OauthSignup() {
    async function openidSignupUserRedirect() {
        const response = await openidSignupRedirect(window.location.search);
        console.log('openidRedirect res: ', response);
    }
    useEffect(() => {
        openidSignupUserRedirect();
    }, []);
}