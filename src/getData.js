import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos";
export default class GetData {
  getData() {
    return axios.get(url);
  }
}
