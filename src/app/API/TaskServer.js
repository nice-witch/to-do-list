import axios from "axios";

export default class TaskServer {
  static async getAll() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?userId=1"
      );
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
