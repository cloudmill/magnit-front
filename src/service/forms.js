import axios from 'axios'



export const formService = {
  sendForm: (data) => {
    return fetch("https://nkz.devmill.ru/contacts/", {method: "POST", body: data})
      .then((response) => {
        response.json().then((json) => {
          const { data } = json;
          console.log(data);
          return json;
        });
      });
  }
}