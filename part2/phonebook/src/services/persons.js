import axios from "axios";
const baseUrl = "/api/persons";

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
};

const create = (newObject) => {
    console.log(newObject)
    const request = axios.post(baseUrl, newObject);
    return request.then((response) => response.data);
};

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    return request.then((response) => response.data);
};

const erase = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    
    return request.then((response) => response.statusText);
};


export default { getAll, create, update, erase };
