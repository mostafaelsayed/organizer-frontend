const currentLocation = window.location.href;

let apiUrl = '';

// dev environment
if (currentLocation.indexOf('the-organizer-dev') !== -1) {
    apiUrl = 'https://the-organizer-backend-dev.herokuapp.com';
}
// staging environment
else if (currentLocation.indexOf('the-organizer') !== -1) {
    apiUrl = 'https://the-organizer-backend.herokuapp.com';
}
// local
else {
    apiUrl = 'http://localhost:4000';
}

export {apiUrl};