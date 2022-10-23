import axios from "axios"

const RegisterAPI = async (name: string, email: string,
    password: string, account: string, bank: string) => {
    await axios
      .post("/api/register", null, { params: {
        Name: name,
        Email: email,
        Password: password,
        Account: account,
        Bank: bank
    }})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response.data.status === 500) {
          alert(error.response.data.message);
        }
      });
  };

  export default RegisterAPI;