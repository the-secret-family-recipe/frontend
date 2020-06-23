import axios from 'axios'

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')

    return axios.create({
        headers: {
            authorization: token,
        },
        // baseURL:'https://bw-savor-backend.herokuapp.com/'
        baseURL:'https://secretfamilyrecipes3.herokuapp.com/'
    })
}
