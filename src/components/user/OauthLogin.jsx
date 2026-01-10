import { openidLoginRedirect } from '../../api/user';
import { useEffect } from "react"
export default function OauthLogin() {
    async function openidLoginUserRedirect() {
        const response = await openidLoginRedirect(window.location.search);
        console.log('openidRedirect res: ', response);
    }
    useEffect(() => {
        openidLoginUserRedirect();
    }, []);
}