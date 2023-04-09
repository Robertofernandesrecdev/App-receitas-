import axios from "axios";

/*
    Rodar com IPV4: json-server --watch -d 180 --host ipv4 db.json
    json-server --watch -d 180 --host 192.168.100.16 db.json
*/

const api = axios.create({
    baseURL: 'http://192.168.100.16:3000'
})

export default api;