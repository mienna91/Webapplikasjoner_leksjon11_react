import Axios from 'axios';

const http = Axios.create({
  baseURL: `${process.env.BASE_URL}${process.env.API_VERSION}`,
  validateStatus(status) {
    return status < 500;
  },
});

export default http;
