import axios from 'axios'

export const formService = {
  sendForm: (data) => {
    return axios.post('https://nkz.devmill.ru/forms/', data);
  }
}