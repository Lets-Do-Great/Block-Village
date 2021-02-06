/*
    서버한테 데이터 요청 보낼 기본 url 세팅 파일
    다른 파일에서는 axios 대신 client.js 를 임포트 하여 요청 파트 작성하면 됨
*/

import axios from 'axios';

const client = axios.create();

client.defaults.baseURL = 'http://i4b205.p.ssafy.io:8080/';

client.defaults.headers.common['Authorization'] = '';

export default client;
