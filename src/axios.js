import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-4b2b2.cloudfunctions.net/api'
    //'http://localhost:5001/ema-jhon-22188/us-central1/api' // The API (cloud function) URL
});

export default instance;