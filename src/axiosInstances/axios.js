import axios from 'axios'

const url = {
  development: "http://localhost:8000/apis",
  test: "testdomain",
  production: "https://my-django-react-todo-app.herokuapp.com/apis",
}[process.env.NODE_ENV]

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/apis"
})

export default axiosInstance