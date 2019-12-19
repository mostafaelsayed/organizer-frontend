const Auth = {
    isAuthenticated: false,
    authenticate() {
        this.isAuthenticated = true;
    },
    signout() {
        this.isAuthenticated = false;
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
    },
    getAuth() {
        return this.isAuthenticated;
    }
};
    
export default Auth;