import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/posts`);
    // console.log(response?.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
