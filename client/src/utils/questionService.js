import http from './http';

const API_URL = '/questions';

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
    return await http.create(`${API_URL}`, data);
  } catch (error) {
    return error.respnse.data;
  }
};

export const update = async (data, id) => {
  let poll;

  try {
    poll = get(id);
  } catch (error) {
    return error.respnse.data;
  }
  try {
    http.update(data, poll);
  } catch (error) {
    return error.respnse.data;
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
