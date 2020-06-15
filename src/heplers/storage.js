const Storage = {
  getToken: () => {
    return localStorage.getItem("ACCESS_TOKEN");
  },
  setToken: (token) => {
    localStorage.setItem("ACCESS_TOKEN", token);
  },
  clearToken: () => {
    localStorage.removeItem("ACCESS_TOKEN");
  },
};

export default Storage;
