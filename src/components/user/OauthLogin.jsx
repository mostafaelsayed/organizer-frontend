import { openidLoginRedirect } from '../../api/user';
import { useEffect } from "react";
import { useNavigate } from 'react-router';
export default function OauthLogin() {
    const navigate = useNavigate();
    async function openidLoginUserRedirect() {
        const response = await openidLoginRedirect(window.location.search);
        console.log('openidRedirect res: ', response);
        if (response.status == 200) {
            navigate('/profile');
        }
        else {
            navigate('/login');
        }
    }
    useEffect(() => {
        openidLoginUserRedirect();
    }, []);
}