import { reactive } from "vue";
import axios from "axios";
const urlLoader = (url: string) => {
  const res = reactive({
    loaded: false,
    loading: true,
    error: null,
    result: null,
  });
  axios
    .get(url)
    .then((data) => {
      res.loaded = true;
      res.loading = false;
      res.result = data.data;
    })
    .catch((err) => {
      res.error = err;
    });
  return res;
};

export default urlLoader;
