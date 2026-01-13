import { openidSignupRedirect } from '../../api/user';
import { useEffect } from "react";
import { useNavigate } from 'react-router';
export default function OauthSignup() {
    const navigate = useNavigate();
    async function openidSignupUserRedirect() {
        const response = await openidSignupRedirect(window.location.search);
        console.log('openidRedirect res: ', response);
        if (response.status == 200) {
            navigate('/profile');
        }
        else {
            navigate('/login');
        }
    }
    useEffect(() => {
        openidSignupUserRedirect();
    }, []);
}