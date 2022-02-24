import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validateToken: async (token:string) => {
        //resposta falsa que foi criada para logar sem api
        return { 
            user: {id: 3, name: "leo", email: "leo@gmail.com"}
        };
        //resposta verdadeira caso tenha uma api
        const response = await api.post('/validate', {token})
        return response.data;
    },
    signin: async (email: string, password: string) => {
        //resposta falsa que foi criada para logar sem api
        return { 
            user: {id: 3, name: "leo", email: "leo@gmail.com"},
            token: "123456789"
        };
        //resposta verdadeira caso tenha uma api
        const response = await api.post('/signin', {email, password})
        return response.data;
    },
    logout: async () => {
        //resposta falsa que foi criada para logar sem api
        return {status: true};
        //resposta verdadeira caso tenha uma api
        const response = await api.post('/logout');
        return response.data;
    }
});