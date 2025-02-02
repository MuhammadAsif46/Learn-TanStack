import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/postsz`);
    // console.log(response?.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// fetch data get by id:
export const fetchPostById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/posts/${id}`);
    // console.log(response);
    // console.log(response?.data);
    return response?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

