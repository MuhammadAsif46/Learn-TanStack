import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com";

// fetch all posts JsonPlaceholderApi
export const fetchPosts = async (pageNumber) => {
  try {
    const response = await axios.get(
      `${baseUrl}/posts?_start=${pageNumber}&_limit=3`
    );
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

// delete post handler
export const deletePost = (id) => {
  return axios.delete(`${baseUrl}/posts/${id}`);
};

// update post handler
export const updatePost = (id) => {
  return axios.put(`${baseUrl}/posts/${id}`, {
    title: "I have Update this title",
  });
};

// infinite scrolling api handle

export const fetchUsers = async ({pageParam=1}) => {
  try {
    const res = await axios.get(`https://api.github.com/users?per_page=10&page=${pageParam}`)
  return res.data
  } catch (err) {
    console.log(err);
  }
};
