import axios from 'axios';

const BASE_URL = 'http://localhost:5000/posts';

export const getPosts = async () => await axios.get(BASE_URL);
export const getPostById = async (id: number) => await axios.get(`${BASE_URL}/${id}`);
export const createPost = async (data: { title: string; content: string }) => await axios.post(BASE_URL, data);
export const updatePost = async (id: number, data: { title: string; content: string }) => await axios.put(`${BASE_URL}/${id}`, data);
export const deletePost = async (id: number) => await axios.delete(`${BASE_URL}/${id}`);
