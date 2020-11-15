import http from './http';

const API_URL = '/choices';

export const list = async () => {
  try {
    return await http.get(`${API_URL}`);
  } catch (error) {
    return error.response.data;
  }
};

export const get = async (id) => {
  try {
    return await http.get(`${API_URL}/${id}`);
  } catch (error) {
    return error.respnse.data;
  }
};

export const create = async (data) => {
  try {
    return await http.post(`${API_URL}`, data);
  } catch (error) {
    return error.respnse.data;
  }
};

export const update = async (id, data) => {
  try {
    return await http.put(`${API_URL}/${id}`, data);
  } catch (err) {
    return err.response.data;
  }
};

export const remove = async (id) => {
  let poll;

  try {
    poll = get(id);
  } catch (error) {
    return error.response.data;
  }
  try {
    http.remove(poll);
  } catch (error) {
    return error.response.data;
  }
};

export default {
  list,
  get,
  create,
  update,
  remove,
};
