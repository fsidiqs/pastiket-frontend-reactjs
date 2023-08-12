import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXZpY2VfaWQiOiJ0ZXN0dCIsIm5vdGlmaWNhdGlvbl90b2tlbiI6Im5vdGlmdG9rZW4iLCJleHAiOjE2OTIxMzk5OTksImlhdCI6MTY5MTg4MDc5OSwiaXNzIjoibWluZHRlcmEifQ.0V9U1i9VB0GtHKlgPL_0byW5UNXiB8XfS7Q9o1jmWFQ'
    },
});

export default instance;
