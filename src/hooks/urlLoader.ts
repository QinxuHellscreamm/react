import { reactive } from "vue";
import axios from "axios";

interface dataType {
  loaded: boolean;
  loading: boolean;
  error: any;
  result: { message: string; status: string } | null;
}
const urlLoader = (url: string) => {
  const res: dataType = reactive({
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
