

// const config = {
//     dev: {
//         url: 'http://localhost:4000',
//     },
//     prod: {
//         url: 'https://the-organizer-backend'
//     }
// };

const apiUrl = window.location.href.startsWith('https') === true ? 'https://the-organizer-backend.herokuapp.com' : 'http://localhost:4000';



export {apiUrl};