import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3003/user");
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};